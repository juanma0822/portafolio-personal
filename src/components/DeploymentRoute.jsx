import React from 'react'
import { GitCommit, PackageCheck, Boxes, Activity } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

const stages = [
  { key: 'commit', label: 'Commit', icon: GitCommit, color: 'var(--cp-azure)' },
  { key: 'build', label: 'Build & Test', icon: PackageCheck, color: 'var(--cp-automation)' },
  { key: 'provision', label: 'Provision', icon: Boxes, color: 'var(--cp-iac)' },
  { key: 'observe', label: 'Observe', icon: Activity, color: 'var(--cp-observe)' }
]

export default function DeploymentRoute({lowline=false}){
  const reduce = useReducedMotion()
  return (
    <nav className={`deployment-route ${lowline? 'lowline':''}`} aria-label="Deployment route">
      <div className="route-wrap">
        <ol className="route-list">
          {stages.map((s, i)=>{
              const Icon = s.icon
              return (
                <li key={s.key} className="route-stage" tabIndex={0} aria-describedby={`route-${s.key}`}>
                  <div className="stage-icon" style={{borderColor: s.color}}>
                    <Icon size={18} strokeWidth={1.8} color={s.color} aria-hidden />
                    {/* pulse ring synchronized with route-signal */}
                    {!reduce && (
                      <motion.span
                        className="stage-pulse"
                        style={{boxShadow:`0 0 0 4px ${s.color}`}}
                        initial={{ scale: 0.6, opacity: 0.6 }}
                        animate={{ scale: [0.6, 1.6], opacity: [0.6, 0] }}
                        transition={{ delay: 0.15 + (i * (2.2 / (stages.length - 1))), duration: 0.9, repeat: 0 }}
                      />
                    )}
                  </div>
                  <div className="stage-label">
                    <div className="stage-title">{s.label}</div>
                  </div>
                  <span className="sr-only" id={`route-${s.key}`}>{s.label}</span>
                  {i < stages.length-1 && (
                    <div className="route-connector" aria-hidden>
                      {/* branch dots that animate to sides */}
                      <div className="branch-dots">
                        {[0,1,2].map((b,bi)=> {
                          // choose color variations
                          const colors = [ 'var(--cp-azure)', 'var(--cp-platform)', 'var(--cp-iac)', 'var(--cp-automation)', 'var(--cp-observe)']
                          const dotColor = colors[(i + bi) % colors.length]
                          const delay = 0.15 + (i * 0.45) + (bi * 0.12)
                          return (
                            <motion.span
                              key={bi}
                              className={`branch-dot ${bi % 2 === 0 ? 'up' : 'down'}`}
                              style={{background: dotColor}}
                              initial={{ opacity: 0, y: 0, scale: 0.85 }}
                              animate={{ opacity: 1, y: bi % 2 === 0 ? -12 - bi*4 : 12 + bi*4, scale: 1 }}
                              transition={{ delay, duration: 0.6, ease: 'easeOut' }}
                            />
                          )
                        })}
                      </div>
                    </div>
                  )}
                </li>
              )
            })}
        </ol>

        {/* animated progress bar + moving signal */}
        {!reduce && (
          <>
            <motion.div className="route-progress" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2.2, ease: 'easeInOut' }} aria-hidden />
            <motion.div
              className="route-signal"
              initial={{ left: '54px' }}
              animate={{ left: 'calc(100% - 54px - 18px)' }}
              transition={{ duration: 2.2, ease: 'linear' }}
              aria-hidden
            />
          </>
        )}
      </div>
    </nav>
  )
}
