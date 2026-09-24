import React from 'react'
import { motion } from 'framer-motion'

const certs = [
  'Gamified Ethical Hacking Certificate - Hacker Mentor',
  'Introducción al desarrollo de aplicaciones móviles para iOS - Coursera (2025)',
  'How to solve problems and take decisions with efficiency - UC Irvine (2025)',
  'Software quality models - SENA (2025)',
  'Relational database design - SENA (2019)'
]

export default function Certifications({lang='es', strings}){
  return (
    <section className="certifications">
      <div className="container">
        <h2>{strings?.sections?.certifications || (lang==='es' ? 'Certificaciones' : 'Certifications')}</h2>
        <div className="cert-grid cert-grid--fancy">
          {certs.map((c,i) => (
            <motion.article className="cert-card" key={c}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, type: 'spring', stiffness: 120, damping: 14 }}
            >
              <div className="cert-deco" aria-hidden />
              <div className="cert-body">
                <h3 className="cert-title">{c}</h3>
                <p className="cert-source">{lang==='es' ? 'Verificado' : 'Verified'}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
