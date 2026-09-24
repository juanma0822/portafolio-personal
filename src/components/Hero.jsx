import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero({lang='es', strings}){
  const title = 'Juan Manuel Valencia Triana'
  const role = lang==='es' ? 'DevOps · Cloud Engineer' : 'DevOps · Cloud Engineer'
  const lead = lang==='es' ? 'Diseño infraestructuras en Azure y automatizo despliegues con IaC y pipelines confiables.' : 'I design Azure infrastructure and automate deployments with IaC and reliable pipelines.'

  return (
    <section className="hero" id="hero" aria-label={title}>
      <div className="container hero-grid">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>{title}</h1>
          <p className="muted">{role}</p>
          <p className="lead">{lead}</p>
          <ul className="hero-highlights small muted">
            <li><strong>Especialidad:</strong> Infraestructura en la nube, IaC, CI/CD</li>
            <li><strong>Impacto:</strong> despliegues reproducibles y observabilidad</li>
          </ul>
          <div className="hero-actions">
            <a className="btn primary" href="#work">{lang==='es' ? 'Ver proyectos' : 'View selected work'}</a>
            <a className="btn ghost" href="cv.html" target="_blank" rel="noopener noreferrer">{lang==='es' ? 'Descargar CV' : 'Download CV'}</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card id-card fancy-card"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          ref={useRef(null)}
          whileHover={{ scale: 1.02 }}
        >
          <div className="card-accent" aria-hidden />
          <IDCard compact />
          {/* compact route removed from hero to avoid duplication */}
        </motion.div>
      </div>
    </section>
  )
}

function TiltCard(){
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50,50], [15,-15])
  const rotateY = useTransform(x, [-50,50], [-15,15])

  function handleMove(e){
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) - rect.width/2
    const py = (e.clientY - rect.top) - rect.height/2
    x.set(px/ (rect.width/2) * 40)
    y.set(py/ (rect.height/2) * 40)
  }

  function handleLeave(){
    x.set(0); y.set(0)
  }

  return (
    <motion.div
      className="hero-tilt"
      ref={ref}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
        <div className="photo">
        <img src="profile.jpg" alt="Juan Manuel" />
      </div>
      <ul className="summary-list">
        <li><strong>Azure</strong> · Bicep · Terraform</li>
        <li><strong>CI/CD</strong> · GitHub Actions · Azure DevOps</li>
        <li><strong>Containers</strong> · Docker · Kubernetes</li>
      </ul>
    </motion.div>
  )
}

function IDCard(){
  return (
    <div className="id-card-inner fancy-card">
      <div className="card-accent" aria-hidden />
      <div className="id-left">
        <div className="id-photo">
          <img src="profile.jpg" alt="Juan Manuel" />
        </div>
      </div>
      <div className="id-right">
        <h3 className="id-name">Juan Manuel
          <span className="title-badge badge-blue">DevOps · Cloud</span>
        </h3>
        <p className="id-tag">"Infraestructura que simplemente funciona."</p>
        <div className="id-info">
          <div><strong>Email:</strong> juanmanuelva3243@gmail.com</div>
          <div><strong>Tel:</strong> +57 3189004221</div>
          <div><strong>Ubicación:</strong> Tuluá, Colombia</div>
        </div>
      </div>
    </div>
  )
}
