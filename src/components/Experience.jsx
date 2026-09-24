import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'DevOps / Cloud Engineering - JM Family (Globant)',
    date: 'Nov 2025 - Presente',
    desc: 'Provisionamiento y configuración de infra en Azure con Bicep, gestión de tickets, CosmosDB y Event Hubs.'
  },
  {
    title: 'Back-End Developer - PRAE (Universidad del Valle)',
    date: 'Ene 2025 - May 2025',
    desc: 'Lideré el backend del proyecto PRAE, diseño de BD relacional y APIs REST.'
  }
  ,{
    title: 'Desarrollador de aplicaciones para móviles - SENA (Prácticas)',
    date: 'Feb 2025 - Jul 2025',
    desc: 'Desarrollé una aplicación móvil con React Native y Supabase para gestionar el ingreso y seguimiento de estudiantes. Implementé lógica de bases de datos relacionales, autenticación y sincronización móvil, y optimicé experiencias offline.'
  }
]

export default function Experience({lang='es', strings}){
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2>{strings?.sections?.experience || (lang==='es' ? 'Experiencia' : 'Experience')}</h2>
        <p className="muted">{lang==='es' ? 'A continuación se muestran roles relevantes donde fortalecí habilidades en infraestructura, automatización y desarrollo de aplicaciones.' : 'Below are relevant roles where I strengthened skills in infrastructure, automation and application development.'}</p>
        <div className="timeline">
          {items.map((it, idx) => (
            <motion.div key={idx} className="timeline-item fancy-card"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <div className="time">{it.date}</div>
              <div className="content">
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
