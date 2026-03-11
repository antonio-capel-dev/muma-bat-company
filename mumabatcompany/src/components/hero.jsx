import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tighter">
            THE FUTURE <br />
            IS <span className="text-muma-accent italic">AERIAL.</span>
          </h1>
          <p className="mt-8 text-xl text-muma-text-secondary max-w-lg leading-relaxed">
            Revolutionizing pest control through smart bat infrastructure and 
            bio-acoustic intelligence. Scalable. Biological. Precise.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="btn-muma">Deploy Infrastructure</button>
            <button className="px-8 py-3 rounded-full border border-white/10 font-bold hover:bg-white/5 transition">
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Aquí es donde meteréis el Canvas de Three.js más adelante */}
        <div className="relative h-[500px] flex items-center justify-center">
          <div className="absolute w-[120%] h-[120%] bg-muma-accent/10 blur-[120px] rounded-full" />
          <div className="text-muma-accent/30 text-xs tracking-widest uppercase animate-pulse">
            [ 3D Bat Infrastructure Model Loading... ]
          </div>
        </div>
      </div>
    </section>
  )
}