import React from 'react'

export default function Header({onToggleTheme, dark, onLangChange, lang, strings}){
  const [open, setOpen] = React.useState(false)

  function close(){ setOpen(false) }

  return (
    <header className="site-header">
      <div className="container header-row">
        <div className="brand">Juan Manuel Valencia Triana</div>

        <button
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={()=>setOpen(v=>!v)}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav className="nav" aria-label="Main navigation">
          <div className="nav-items">
            <a className="nav-item" href="#work" onClick={close}>{strings?.sections?.work || (lang==='es' ? 'Proyectos' : 'Work')}</a>
            <a className="nav-item" href="#about" onClick={close}>{strings?.sections?.about || (lang==='es' ? 'Perfil' : 'About')}</a>
            <a className="nav-item" href="#experience" onClick={close}>{strings?.sections?.experience || (lang==='es' ? 'Experiencia' : 'Experience')}</a>
            <a className="nav-item" href="#skills" onClick={close}>{strings?.sections?.skills || (lang==='es' ? 'Habilidades' : 'Skills')}</a>
            <a className="nav-item" href="#contact" onClick={close}>{strings?.sections?.contact || (lang==='es' ? 'Contacto' : 'Contact')}</a>
          </div>
          <div className="nav-actions">
            <button className="btn ghost nav-item" onClick={()=>{ onToggleTheme(); close() }} aria-pressed={dark}>{dark ? 'Light' : 'Dark'}</button>
            <select className="nav-item lang-select" value={lang} onChange={(e)=>{ onLangChange(e.target.value); close() }} aria-label="Language select">
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>
        </nav>

      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`} role="region" aria-hidden={!open}>
        <div className="mobile-menu-inner">
          <a className="mobile-link" href="#about" onClick={close}>{strings?.sections?.about || (lang==='es' ? 'Perfil' : 'About')}</a>
          <a className="mobile-link" href="#experience" onClick={close}>{strings?.sections?.experience || (lang==='es' ? 'Experiencia' : 'Experience')}</a>
          <a className="mobile-link" href="#skills" onClick={close}>{strings?.sections?.skills || (lang==='es' ? 'Habilidades' : 'Skills')}</a>
          <a className="mobile-link" href="#contact" onClick={close}>{strings?.sections?.contact || (lang==='es' ? 'Contacto' : 'Contact')}</a>
          <div className="mobile-actions">
            <button className="btn primary" onClick={()=>{ window.location.href='cv.html' }}>CV</button>
            <button className="btn ghost" onClick={()=>{ onToggleTheme(); }}>{dark ? 'Light' : 'Dark'}</button>
            <select className="lang-select" value={lang} onChange={(e)=>{ onLangChange(e.target.value); }} aria-label="Language select">
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}
