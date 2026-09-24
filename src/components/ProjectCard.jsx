import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({project, expanded, onToggle, lang='es'}){
  const isExpanded = !!expanded

  return (
    <motion.article layout className={`project-card card ${isExpanded? 'expanded':''}`} aria-expanded={isExpanded} aria-labelledby={`proj-${project.id}-title`}>
      <div className="project-thumb">
        <img src={project.image || (`/assets/projects/${project.id}.svg`)} alt={project.title} onError={(e)=>{e.currentTarget.style.display='none'}} />
      </div>
      <div className="project-content">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:12}}>
          <h3 id={`proj-${project.id}-title`}>{project.title}</h3>
          <div>
            <button className="btn ghost expand-btn" aria-controls={`proj-${project.id}-details`} aria-expanded={isExpanded} onClick={()=>onToggle(project.id)}>
              {isExpanded ? (lang==='es' ? 'Cerrar' : 'Close') : (lang==='es' ? 'Ver caso' : 'View case')}
            </button>
          </div>
        </div>
        <div className="muted small">{project.category} · {project.period}</div>
        <p className="small">{project.summary}</p>
        <div className="tech small muted">{project.tech.join(' · ')}</div>

        <motion.div layout id={`proj-${project.id}-details`} initial={false} animate={{height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0}} style={{overflow:'hidden'}} aria-hidden={!isExpanded}>
          {isExpanded && (
            <div className="project-expanded" style={{marginTop:12}}>
              <h4>{lang==='es' ? 'Detalles' : 'Details'}</h4>
              <p><strong>{lang==='es' ? 'Rol:' : 'Role:'}</strong> {project.role}</p>
              {project.outcome && <p><strong>{lang==='es' ? 'Resultado:' : 'Outcome:'}</strong> {project.outcome}</p>}
              <p><strong>{lang==='es' ? 'Tecnologías:' : 'Technologies:'}</strong> {project.tech.join(', ')}</p>
              <div style={{marginTop:8}}>
                <a className="btn primary" href={project.link || `#project-${project.id}`}>{lang==='es' ? 'Ver más' : 'View more'}</a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.article>
  )
}
