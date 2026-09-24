import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import { strings } from './i18n'

export default function App(){
  // arrancar en modo oscuro por defecto para mejor contraste
  const [dark, setDark] = React.useState(true)
  const [lang, setLang] = React.useState('es')

  React.useEffect(()=>{
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  },[dark])

  const translations = strings

  return (
    <div className="app-root" data-lang={lang}>
      <Header onToggleTheme={()=>setDark(d=>!d)} dark={dark} onLangChange={setLang} lang={lang} strings={translations[lang]} />
      <main>
        <Hero lang={lang} strings={translations[lang]} />
        <About lang={lang} />
        <Experience lang={lang} strings={translations[lang]} />
        <Skills lang={lang} strings={translations[lang]} />
        <Education lang={lang} strings={translations[lang]} />
        <Certifications lang={lang} strings={translations[lang]} />
        <Contact lang={lang} translations={translations[lang]} />
      </main>
      <Footer />
    </div>
  )
}
