import { useState } from "react"
import { motion } from "framer-motion"

export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-muma-dark/80 backdrop-blur-md border-b border-white/5">
      
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-muma-accent rounded-lg rotate-45" />
          <span className="text-xl font-bold tracking-tighter text-muma-text-primary">
            MUMA <span className="text-muma-accent">BAT COMPANY.</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muma-text-secondary">
          <a href="#infra" className="hover:text-muma-accent transition-colors">Infrastructure</a>
          <a href="#vr" className="hover:text-muma-accent transition-colors">VR Experience</a>
          <a href="#data" className="hover:text-muma-accent transition-colors">Data Analytics</a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-muma-text-primary"></span>
          <span className="w-6 h-0.5 bg-muma-text-primary"></span>
          <span className="w-6 h-0.5 bg-muma-text-primary"></span>
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-muma-dark border-t border-white/5"
        >
          <div className="flex flex-col items-center gap-6 py-6 text-muma-text-secondary">

            <a href="#infra" className="hover:text-muma-accent transition-colors">
              Infrastructure
            </a>

            <a href="#vr" className="hover:text-muma-accent transition-colors">
              VR Experience
            </a>

            <a href="#data" className="hover:text-muma-accent transition-colors">
              Data Analytics
            </a>

          </div>
        </motion.div>
      )}

    </nav>
  )
}