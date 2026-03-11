'use client'
import { useState } from 'react'

export default function ImpactCalculator() {
  const [hectares, setHectares] = useState(10)
  
  // Lógica de impacto estimada
  const insectsEaten = hectares * 150000 // 150k insectos por hectárea/noche
  const pesticideSaved = hectares * 12 // 12kg de químicos menos

  return (
    <section id="infra" className="py-24 px-6 bg-muma-dark">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Calculate Your <span className="text-muma-accent">Impact</span></h2>
          <p className="text-muma-text-secondary">Estimate the biological power of a MuMa Network on your land.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center bg-muma-surface p-10 rounded-[3rem] border border-white/5">
          <div className="space-y-8">
            <div>
              <label className="block text-sm mb-4 text-muma-text-secondary uppercase tracking-widest">Farm Size (Hectares)</label>
              <input 
                type="range" 
                min="1" 
                max="500" 
                value={hectares}
                onChange={(e) => setHectares(Number(e.target.value))}
                className="w-full accent-muma-accent bg-muma-dark h-2 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-4xl font-bold text-muma-accent mt-4 block">{hectares} ha</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-muma-dark/50 rounded-2xl border border-muma-accent/20">
              <p className="text-sm text-muma-text-secondary">Pest Control Capacity</p>
              <p className="text-3xl font-bold">{insectsEaten.toLocaleString()} <span className="text-sm font-normal text-muma-text-secondary">insects/night</span></p>
            </div>
            <div className="p-6 bg-muma-dark/50 rounded-2xl border border-muma-bio/20">
              <p className="text-sm text-muma-text-secondary">Chemical Reduction</p>
              <p className="text-3xl font-bold text-muma-bio">-{pesticideSaved} <span className="text-sm font-normal text-muma-text-secondary">kg of pesticides/year</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}