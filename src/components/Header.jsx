import React from 'react'

export default function Header({onToggleTheme, dark, onLangChange, lang, strings}){
  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">Juan Manuel Valencia Triana</div>
        <nav className="nav" aria-label="Main navigation">
          <div className="nav-items">
            <a className="nav-item" href="#about">{strings?.sections?.about || (lang==='es' ? 'Perfil' : 'About')}</a>
            <a className="nav-item" href="#experience">{strings?.sections?.experience || (lang==='es' ? 'Experiencia' : 'Experience')}</a>
            <a className="nav-item" href="#skills">{strings?.sections?.skills || (lang==='es' ? 'Habilidades' : 'Skills')}</a>
            <a className="nav-item" href="#contact">{strings?.sections?.contact || (lang==='es' ? 'Contacto' : 'Contact')}</a>
          </div>
          <div className="nav-actions">
            <button className="btn ghost nav-item" onClick={onToggleTheme} aria-pressed={dark}>{dark ? 'Light' : 'Dark'}</button>
            <select className="nav-item lang-select" value={lang} onChange={(e)=>onLangChange(e.target.value)} aria-label="Language select">
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>
        </nav>
      </div>
    </header>
  )
}
