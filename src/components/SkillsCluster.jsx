import React, { useState } from 'react'

export default function SkillsCluster({lang='es'}){
  const clusters = [
    { key:'cloud', title: lang==='es' ? 'Cloud & Infrastructure' : 'Cloud & Infrastructure', color:'var(--cp-azure)', tech:['Azure','IaC','Terraform'] },
    { key:'delivery', title: lang==='es' ? 'Delivery & Automation' : 'Delivery & Automation', color:'var(--cp-automation)', tech:['CI/CD','GitHub Actions','Pipelines'] },
    { key:'platform', title: lang==='es' ? 'Containers & Platform' : 'Containers & Platform', color:'var(--cp-platform)', tech:['Docker','Kubernetes','Helm'] }
  ]

  const [active, setActive] = useState(null)

  return (
    <section className="skills container" aria-labelledby="skills-heading">
      <h2 id="skills-heading">{lang==='es' ? 'Capacidades' : 'Capabilities'}</h2>
      <p className="muted">{lang==='es' ? 'Clusters de habilidades con evidencia vinculada.' : 'Capability clusters with linked evidence.'}</p>
      <div className="skills-grid" role="list">
        {clusters.map(c=> (
          <div key={c.key} className={`skill-cluster card`} role="listitem" tabIndex={0} onMouseEnter={()=>setActive(c.key)} onMouseLeave={()=>setActive(null)} onFocus={()=>setActive(c.key)} onBlur={()=>setActive(null)} style={{borderTop:`4px solid ${c.color}`}}>
            <div style={{display:'flex',alignItems:'center',gap:12}}>
              <div style={{width:44,height:44,borderRadius:10,background:c.color,display:'flex',alignItems:'center',justifyContent:'center',color:'#081227',fontWeight:700}} aria-hidden>•</div>
              <div>
                <h3 style={{margin:0}}>{c.title}</h3>
                <div className="small muted">{lang==='es' ? 'Evidencia: proyectos relevantes' : 'Evidence: related projects'}</div>
              </div>
            </div>
            <div style={{marginTop:10,display:'flex',gap:8,flexWrap:'wrap'}}>
              {c.tech.map(t=> (
                <button key={t} className="bubble" aria-pressed={active===c.key} style={{border:`1px solid ${c.color}`}}>{t}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
