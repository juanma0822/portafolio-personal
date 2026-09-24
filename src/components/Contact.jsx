import React from 'react'

export default function Contact({lang='es', translations={download:'Descargar CV'}}){
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>{lang==='es' ? 'Contacto' : 'Contact'}</h2>
        <p>{lang==='es'
          ? 'Puedes escribirme a '
          : 'You can write to '}
          <strong>juanmanuelva3243@gmail.com</strong>{lang==='es' ? ' o usar los enlaces abajo.' : ' or use the links below.'} {lang==='es' ? 'También puedo compartir mi CV detallado y proyectos si lo solicitas.' : 'I can also share my full CV and projects on request.'}</p>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <div className="fancy-card" style={{display:'inline-flex',padding:'6px 10px',gap:8,alignItems:'center'}}>
            <a className="btn ghost" href="mailto:juanmanuelva3243@gmail.com">Email</a>
            <a className="btn ghost" href="https://www.linkedin.com/in/juan-manuel-valencia-devops/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn primary" href="cv.html" target="_blank" rel="noreferrer">CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}
