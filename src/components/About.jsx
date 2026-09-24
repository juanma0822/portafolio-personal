import React from 'react'

export default function About({lang='es'}){
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>{lang==='es' ? 'Perfil' : 'Profile'}</h2>
        <p>
          {lang==='es'
            ? 'Estudiante de Ingeniería de Sistemas con experiencia práctica en DevOps y cloud engineering. Actualmente Junior DevOps Engineer en el proyecto JM Family, trabajando con Azure, IaC (Bicep), CI/CD y automatización. Me enfoco en crear infraestructuras seguras, escalables y automatizadas, integrando pipelines, pruebas y observabilidad para mejorar la entrega continua.'
            : 'Systems Engineering student with hands-on experience in DevOps and cloud engineering. Currently Junior DevOps Engineer on the JM Family project, working with Azure, IaC (Bicep), CI/CD and automation. I focus on building secure, scalable, and automated infrastructure, integrating pipelines, testing and observability to improve continuous delivery.'}
        </p>
        <p>
          {lang==='es'
            ? 'Mi objetivo es impulsar la confiabilidad y velocidad de despliegue mediante IaC, revisión de arquitecturas y automatización inteligente. Busco oportunidades que me permitan seguir creciendo en cloud-native y prácticas SRE.'
            : 'My goal is to drive reliability and deployment speed through IaC, architecture reviews and smart automation. I am seeking opportunities to keep growing in cloud-native and SRE practices.'}
        </p>
      </div>
    </section>
  )
}
