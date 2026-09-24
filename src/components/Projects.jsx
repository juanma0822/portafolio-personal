import React from 'react'
import { projects } from '../data/portfolio'

export default function Projects({lang='es', strings}){
  const label = strings?.sections?.work || (lang==='es' ? 'Proyectos' : 'Work')
  const subtitle = lang==='es' ? 'Selección de proyectos relevantes y contribuciones.' : 'Selected projects and case studies.'
  const featured = projects && projects.length ? projects[0] : null
  const rest = projects && projects.length>1 ? projects.slice(1) : []

  return (
    <section id="work" className="projects" aria-labelledby="work-heading">
      <div className="container">
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
            <article key={p.id} id={`project-${p.id}`} className="project-card card" role="listitem">
              <div className="project-thumb">
                <img src={p.image || (`/assets/projects/${p.id}.svg`)} alt={p.title} onError={(e)=>{e.currentTarget.style.display='none'}} />
              </div>
              <div className="project-content">
                <h3>{p.title}</h3>
                <div className="muted small">{p.category} · {p.period}</div>
                <p className="small">{p.summary}</p>
                <div className="tech small muted">{p.tech.join(' · ')}</div>
                <div className="project-actions" style={{marginTop:8}}>
                  {p.link && <a className="btn primary" href={p.link} target="_blank" rel="noopener noreferrer">{lang==='es' ? 'Ver' : 'View'}</a>}
                  <a className="btn ghost" href="cv.html" target="_blank" rel="noopener noreferrer">{lang==='es' ? 'CV' : 'CV'}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
