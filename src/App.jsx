import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import { strings } from './i18n'

export default function App(){
  const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const [dark, setDark] = React.useState(()=>{
    try{
      const v = localStorage.getItem('pref-theme')
      if(v) return v === 'dark'
    }catch(e){}
    return prefersDark
  })
  const [lang, setLang] = React.useState(()=>{
    try{
      const v = localStorage.getItem('pref-lang')
      if(v) return v
    }catch(e){}
    return 'es'
  })

  React.useEffect(()=>{
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    try{ localStorage.setItem('pref-theme', dark ? 'dark' : 'light') }catch(e){}
  },[dark])

  React.useEffect(()=>{
    try{ localStorage.setItem('pref-lang', lang) }catch(e){}
    document.documentElement.lang = lang
  },[lang])

  const translations = strings

  return (
    <div className="app-root" data-lang={lang}>
      <Header onToggleTheme={()=>setDark(d=>!d)} dark={dark} onLangChange={setLang} lang={lang} strings={translations[lang]} />
      <main>
        <Hero lang={lang} strings={translations[lang]} />
        <Projects lang={lang} strings={translations[lang]} />
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
