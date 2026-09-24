import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div>© {new Date().getFullYear()} Juan Manuel Valencia Triana</div>
        <div className="small muted">juanmanuelva3243@gmail.com · +57 3189004221</div>
        <div style={{marginTop:8}}>Made with ❤️ · Interactive portfolio demo</div>
      </div>
    </footer>
  )
}
