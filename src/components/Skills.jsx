import React from 'react'
import { motion } from 'framer-motion'
import SkillBubblesCanvas from './SkillBubblesCanvas'

const skills = [
  'Azure', 'Bicep', 'Terraform', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'Node.js', 'React',
  'React Native', 'Supabase', 'PostgreSQL', 'Cosmos DB', 'Event Hubs', 'Jenkins', 'Swagger', 'JWT'
]

// extras for bubble colors
const bubbleColors = ['#0a84ff', '#0b1220', '#6b7280', '#a3bffa', '#dbeafe']

export default function Skills({lang='es'}){
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>{lang==='es' ? 'Habilidades' : 'Skills'}</h2>

        {/* Visible fallback pills for screen readers removed from main visual to avoid duplication */}
        <ul className="sr-only" aria-hidden={false}>
          {skills.map(s => <li key={s}>{s}</li>)}
        </ul>

        {/* Canvas-based interactive bubbles (visual) */}
        <div className="card fancy-card" style={{padding:10}}>
          <div className="card-accent" aria-hidden />
          <SkillBubblesCanvas skills={skills} colors={bubbleColors} />
        </div>
      </div>
    </section>
  )
}
