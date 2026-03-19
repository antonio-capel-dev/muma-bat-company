import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { 
  Box, Laptop, Microscope, ChevronRight, 
  Database, ShieldCheck, Microscope as Science, Zap,
  Dna, Monitor, Gavel, TreePine
} from "lucide-react";

import Footer from "../../components/footer";

const unidades = [
  {
    titulo: "Infraestructura de Biodiversidad",
    subtitulo: "Refugios Técnicos",
    icon: <Box size={32} />,
    borderClass: "border-marca-principal",
    textClass: "text-marca-principal",
    problema: "Pérdida de hábitats y rotura de la conectividad biológica.",
    avales: [
      { nombre: "Gestión Forestal", desc: "Diseño de micro-hábitats en masas forestales." },
      { nombre: "Agricultura Regenerativa", desc: "Control biológico de plagas sin químicos." },
      { nombre: "SbN", desc: "Soluciones basadas en la naturaleza para entornos urbanos." },
      { nombre: "Restauración Ecológica", desc: "Recuperación de funciones biológicas en el suelo." }
    ]
  },
  {
    titulo: "Ecosistemas Digitales",
    subtitulo: "Inmersión & VR",
    icon: <Laptop size={32} />,
    borderClass: "border-marca-purple",
    textClass: "text-marca-purple",
    problema: "Invisibilidad de los procesos ecológicos para el ojo humano.",
    avales: [
      { nombre: "Realidad Virtual", desc: "Simulación de entornos y comportamientos de fauna." },
      { nombre: "Digitalización", desc: "Transformación de variables de campo en activos Big Data." },
      { nombre: "Videojuegos", desc: "Serious Games para transferencia de conocimiento." },
      { nombre: "Innovación I+D", desc: "Desarrollo de metodologías disruptivas propias." }
    ]
  },
  {
    titulo: "Estrategia de Impacto",
    subtitulo: "Consultoría & Formación",
    icon: <Microscope size={32} />,
    borderClass: "border-blue-500",
    textClass: "text-blue-500",
    problema: "Riesgos legales y falta de criterio técnico en la inversión verde.",
    avales: [
      { nombre: "Legislación Ambiental", desc: "Cumplimiento normativo y seguridad jurídica." },
      { nombre: "Sostenibilidad ESG", desc: "Integración de la biodiversidad en el valor de marca." },
      { nombre: "Bioacústica", desc: "Auditoría de fauna mediante análisis ultrasónico." },
      { nombre: "Educación Técnica", desc: "Transferencia de know-how a cuadros directivos." }
    ]
  }
];

export default function EducacionAmbiental() {
  return (
    <>
      <Helmet>
        <title>Autoridad Técnica | MUMA SL</title>
      </Helmet>
      <main className="min-h-screen bg-[#050505] pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <header className="mb-24">
            <span className="text-marca-principal font-mono text-xs tracking-[0.5em] uppercase mb-4 block">Scientific & Tech Foundation</span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
              SISTEMAS DE <br/> <span className="text-marca-purple">ALTA CONSULTORÍA</span>
            </h1>
          </header>

          <div className="space-y-12">
            {unidades.map((u, idx) => (
              <motion.section 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* PILAR PRINCIPAL */}
                <div className={`lg:col-span-4 p-10 bg-fondo-superficie border-l-4 ${u.borderClass} rounded-r-[3rem] flex flex-col justify-center`}>
                  <div className={`${u.textClass} mb-6`}>{u.icon}</div>
                  <h2 className="text-3xl font-bold text-white mb-2">{u.titulo}</h2>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-6">{u.subtitulo}</p>
                  <p className="text-sm text-texto-secundario italic font-light leading-relaxed">
                    "{u.problema}"
                  </p>
                </div>

                {/* AVALES TÉCNICOS (LOS 4 PUNTOS CADA UNO) */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {u.avales.map((aval, i) => (
                    <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] transition-all group">
                      <div className="flex items-center gap-3 mb-2">
                        <Zap size={14} className={`${u.textClass} opacity-50 group-hover:opacity-100`} />
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">{aval.nombre}</h4>
                      </div>
                      <p className="text-xs text-texto-secundario font-light leading-relaxed">
                        {aval.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* CIERRE DE AUTORIDAD */}
          <div className="mt-40 p-16 rounded-[4rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-marca-principal to-transparent"></div>
            <Science className="mx-auto text-marca-principal mb-8 opacity-50" size={40} />
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Criterio Técnico, no solo Ejecución</h3>
            <p className="max-w-2xl mx-auto text-texto-secundario font-light mb-12">
              Cada proyecto de MUMA SL está avalado por una matriz de conocimientos multidisciplinar que garantiza la viabilidad biológica, tecnológica y legal del resultado final.
            </p>
            <button className="px-12 py-5 bg-white text-black rounded-full font-black text-xs tracking-widest uppercase hover:bg-marca-principal transition-all">
              Solicitar Dossier de Capacidades
            </button>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}