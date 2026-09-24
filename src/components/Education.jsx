import React from 'react'
import { motion } from 'framer-motion'

const education = [
  { school: 'Universidad del Valle, Tuluá', degree: 'BS, Systems Engineering', date: 'Jan 2021 - Jun 2026' },
  { school: 'SENA, Tuluá', degree: 'Technical Degree in Software Programming', date: 'Jan 2019 - Dec 2020' },
  { school: 'Colegio San Juan Bosco', degree: 'High School Diploma – Systems Programming', date: 'Dec 2020' }
]

export default function Education({lang='es', strings}){
  return (
    <section className="education">
      <div className="container">
        <h2>{strings?.sections?.education || (lang==='es' ? 'Educación' : 'Education')}</h2>
        <div className="edu-list">
          {education.map((e,i)=> (
            <motion.div key={i} className="edu-item fancy-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3>{e.school}</h3>
              <div className="muted">{e.degree} · {e.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
