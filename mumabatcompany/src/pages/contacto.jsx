import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

// Componentes comunes
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const varianteSeccion = {
  oculto: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function Contacto() {
  return (
    <>
    {/* Todos los formularios de contacto se realizaran cuando se migre el host */}
      <Helmet>
        <title>Contacto | MUMA BAT COMPANY</title>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-fondo-base pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <motion.div 
            initial="oculto"
            animate="visible"
            variants={varianteSeccion}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-texto-titulo mb-4">
              Hablemos de <span className="text-marca-principal">Biodiversidad</span>
            </h1>
            <p className="text-texto-secundario text-lg max-w-2xl mx-auto">
              ¿Tienes un proyecto agrícola, urbano o educativo? Nuestro equipo técnico te asesorará sobre la mejor solución MUMA.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Columna 1: Info de contacto */}
            <motion.div 
              initial="oculto"
              whileInView="visible"
              viewport={{ once: true }}
              variants={varianteSeccion}
              className="space-y-8"
            >
              <div className="p-8 bg-fondo-superficie rounded-3xl border border-white/5 space-y-6">
                <h3 className="text-2xl font-bold text-texto-titulo flex items-center gap-3">
                  <MessageSquare className="text-marca-principal" /> Datos de contacto
                </h3>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-marca-principal/10 rounded-xl text-marca-principal">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-marca-principal uppercase tracking-widest">Email</p>
                    <p className="text-texto-principal">info@murcielagosmalaga.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-marca-principal/10 rounded-xl text-marca-principal">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-marca-principal uppercase tracking-widest">Teléfono / WhatsApp</p>
                    <p className="text-texto-principal">+34 664 213 450</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-marca-principal/10 rounded-xl text-marca-principal">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-marca-principal uppercase tracking-widest">Ubicación</p>
                    <p className="text-texto-principal">Málaga, España</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Columna 2: Formulario */}
            <motion.div 
              initial="oculto"
              whileInView="visible"
              viewport={{ once: true }}
              variants={varianteSeccion}
              className="bg-fondo-superficie p-8 rounded-3xl border border-white/5"
            >
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-texto-secundario uppercase mb-2 ml-1">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-texto-principal focus:border-marca-principal outline-none transition-all"
                    placeholder="Tu nombre..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-texto-secundario uppercase mb-2 ml-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-texto-principal focus:border-marca-principal outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-texto-secundario uppercase mb-2 ml-1">Mensaje</label>
                  <textarea 
                    rows="4"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-texto-principal focus:border-marca-principal outline-none transition-all resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-marca-principal text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform active:scale-95"
                >
                  <Send size={18} /> Enviar Mensaje
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}