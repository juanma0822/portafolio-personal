import React, { useState } from 'react'
import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import DeploymentRoute from './DeploymentRoute'

export default function Projects({lang='es', strings}){
  const label = strings?.sections?.work || (lang==='es' ? 'Proyectos' : 'Work')
  const subtitle = lang==='es' ? 'Selección de proyectos relevantes y contribuciones.' : 'Selected projects and case studies.'
  const featured = projects && projects.length ? projects[0] : null
  const rest = projects && projects.length>1 ? projects.slice(1) : []
  const [open, setOpen] = useState(null)

  function toggle(id){
    setOpen(prev => prev === id ? null : id)
  }

  return (
    <section id="work" className="projects" aria-labelledby="work-heading">
      <div className="container">
        {/* DeploymentRoute showcased above projects */}
        <div style={{marginBottom:18}}>
          <div className="fancy-card" style={{padding:18}}>
            <h3 style={{margin:0,marginBottom:8}}>{lang==='es' ? 'Deployment route' : 'Deployment route'}</h3>
            <div style={{marginTop:8}}>
              <DeploymentRoute />
            </div>
          </div>
        </div>
        <h2 id="work-heading">{label}</h2>
        <p className="muted">{subtitle}</p>

        {featured && (
          <div className="projects-featured">
            <article className="featured-card card">
              <div className="featured-media">
                <img src={featured.image || (`/assets/projects/${featured.id}.svg`)} alt={featured.title} onError={(e)=>{e.currentTarget.style.display='none'}} />
              </div>
              <div className="featured-body">
                <h3 className="title-gradient">{featured.title}</h3>
                <div className="muted small">{featured.category} · {featured.period}</div>
                <p className="lead">{featured.summary}</p>
                {featured.outcome && <p className="muted small">{featured.outcome}</p>}
                <div className="tech small muted">{featured.tech.join(' · ')}</div>
                <div className="project-actions" style={{marginTop:12}}>
                  {featured.link ? (
                    <a className="btn primary" href={featured.link} target="_blank" rel="noopener noreferrer">{lang==='es' ? 'Ver proyecto' : 'View project'}</a>
                  ) : (
                    <a className="btn primary" href={`#project-${featured.id}`}>{lang==='es' ? 'Ver detalles' : 'View details'}</a>
                  )}
                  <a className="btn ghost" href="cv.html" target="_blank" rel="noopener noreferrer">{lang==='es' ? 'Descargar CV' : 'Download CV'}</a>
                </div>
              </div>
            </article>
          </div>
        )}

        <div className="projects-grid" role="list">
          {rest.map(p=> (
            <ProjectCard key={p.id} project={p} expanded={open===p.id} onToggle={toggle} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
