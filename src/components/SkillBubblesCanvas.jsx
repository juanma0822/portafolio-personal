import React, {useRef, useEffect} from 'react'

export default function SkillBubblesCanvas({skills, colors}){
  const ref = useRef(null)
  const particles = useRef([])
  const raf = useRef(null)
  const tooltipRef = useRef(null)
  const hovered = useRef(-1)

  useEffect(()=>{
    const canvas = ref.current
    const ctx = canvas.getContext('2d')

    let w = canvas.width = canvas.offsetWidth
    let h = canvas.height = canvas.offsetHeight

    function resize(){
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', resize)

    // init particles with better sizing and contrast
    particles.current = skills.map((s,i)=>{
      // base radius scaled by label length (but clamped)
      const base = 32 + (i % 4) * 10
      const lenBoost = Math.min(36, Math.max(0, s.length - 6))
      const r = Math.min(72, base + Math.floor(lenBoost/2))
      return {
        x: Math.random()*(w-2*r)+r,
        y: Math.random()*(h-2*r)+r,
        vx: (Math.random()-0.5)*1.2,
        vy: (Math.random()-0.5)*1.2,
        r,
        color: colors[i % colors.length],
        label: s,
        active:false
      }
    })

    // ensure parent has tooltip element
    if(tooltipRef.current == null){
      const t = document.createElement('div')
      t.className = 'bubble-tooltip'
      t.style.display = 'none'
      t.style.position = 'absolute'
      t.style.pointerEvents = 'none'
      t.style.zIndex = 5
      canvas.parentElement.style.position = canvas.parentElement.style.position || 'relative'
      canvas.parentElement.appendChild(t)
      tooltipRef.current = t
    }

    function step(){
      ctx.clearRect(0,0,w,h)
      // physics
      const ps = particles.current
      for(let i=0;i<ps.length;i++){
        const p = ps[i]
        p.x += p.vx
        p.y += p.vy

        // walls
        if(p.x - p.r < 0){ p.x = p.r; p.vx *= -1 }
        if(p.x + p.r > w){ p.x = w - p.r; p.vx *= -1 }
        if(p.y - p.r < 0){ p.y = p.r; p.vy *= -1 }
        if(p.y + p.r > h){ p.y = h - p.r; p.vy *= -1 }
      }

      // collisions
      for(let i=0;i<ps.length;i++){
        for(let j=i+1;j<ps.length;j++){
          const a = ps[i], b = ps[j]
          const dx = b.x - a.x
          const dy = b.y - a.y
          const dist = Math.hypot(dx,dy)
          const minDist = a.r + b.r
          if(dist < minDist){
            // simple elastic collision resolution
            const angle = Math.atan2(dy,dx)
            const overlap = (minDist - dist)/2
            const sx = Math.cos(angle)*overlap
            const sy = Math.sin(angle)*overlap
            a.x -= sx; a.y -= sy
            b.x += sx; b.y += sy

            // swap velocities projection
            const vx1 = a.vx, vy1 = a.vy
            a.vx = b.vx*0.9
            a.vy = b.vy*0.9
            b.vx = vx1*0.9
            b.vy = vy1*0.9
          }
        }
      }

        // draw with improved contrast and outline
        for(const p of particles.current){
          ctx.beginPath()
          // ensure readable fill: dark theme light text, light theme dark text
          const theme = document.documentElement.dataset.theme || 'light'
          const textIsDark = theme === 'light'
          // draw soft radial background for lighter colors
          const grad = ctx.createRadialGradient(p.x - p.r*0.3, p.y - p.r*0.3, p.r*0.1, p.x, p.y, p.r)
          grad.addColorStop(0, 'rgba(255,255,255,0.25)')
          grad.addColorStop(1, p.color)
          ctx.fillStyle = p.active ? '#fff' : grad
          ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
          ctx.fill()

          // strong outline for contrast
          ctx.lineWidth = Math.max(2, Math.floor(p.r*0.06))
          ctx.strokeStyle = p.active ? p.color : (theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)')
          ctx.stroke()

          // label: choose color that contrasts with fill
          ctx.fillStyle = p.active ? p.color : (textIsDark ? '#041024' : '#fff')
          ctx.font = `700 ${Math.max(12, Math.floor(p.r/3))}px Inter, Arial`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'

          // improved truncation: consider word boundaries
          let label = p.label
          if(ctx.measureText(label).width > p.r*1.6){
            const words = label.split(' ')
            let out = ''
            for(const w of words){
              if(ctx.measureText(out + ' ' + w + '...').width > p.r*1.6) break
              out = out ? out + ' ' + w : w
            }
            if(!out) out = label.slice(0, Math.max(3, Math.floor(p.r/6)))
            label = out + '...'
          }
          ctx.fillText(label, p.x, p.y)
        }

      raf.current = requestAnimationFrame(step)
    }

    function handleClick(e){
      const rect = canvas.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      for(const p of particles.current){
        const d = Math.hypot(p.x-mx,p.y-my)
        if(d < p.r){ p.active = !p.active; p.vx += (Math.random()-0.5)*4; p.vy += (Math.random()-0.5)*4 }
      }
    }

    function handleMove(e){
      const rect = canvas.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      let found = -1
      for(let i=0;i<particles.current.length;i++){
        const p = particles.current[i]
        const d = Math.hypot(p.x-mx,p.y-my)
        if(d < p.r + 6){ found = i; break }
      }
      if(found !== hovered.current){
        hovered.current = found
        const t = tooltipRef.current
        if(found === -1){ t.style.display = 'none' }
        else{
          const p = particles.current[found]
          t.textContent = p.label
          t.style.display = 'block'
          t.style.left = Math.min(rect.width - 10, mx + 12) + 'px'
          t.style.top = Math.max(6, my - 8) + 'px'
          t.style.padding = '6px 8px'
          t.style.borderRadius = '6px'
          t.style.background = 'rgba(0,0,0,0.7)'
          t.style.color = '#fff'
          t.style.fontWeight = '700'
          t.style.fontSize = Math.min(16, Math.max(12, Math.floor(p.r/4))) + 'px'
        }
      }
    }

    function handleLeave(){
      hovered.current = -1
      if(tooltipRef.current) tooltipRef.current.style.display = 'none'
    }

    canvas.addEventListener('click', handleClick)
    canvas.addEventListener('mousemove', handleMove)
    canvas.addEventListener('mouseleave', handleLeave)
    step()

    return ()=>{
      cancelAnimationFrame(raf.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('click', handleClick)
      canvas.removeEventListener('mousemove', handleMove)
      canvas.removeEventListener('mouseleave', handleLeave)
    }
  },[skills, colors])

  return (
    <div style={{width:'100%',height:320,maxWidth:900,position:'relative'}}>
      <canvas ref={ref} style={{width:'100%',height:'100%',display:'block',borderRadius:12}} />
    </div>
  )
}
