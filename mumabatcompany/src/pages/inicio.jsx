import React from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Box,
  Eye,
  BookOpen,
  Users,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

// --- COMPONENTES INTERNOS (BLOQUES) ---

const Hero = () => {
  // Nota: Si la imagen es local, impórtala arriba: import bgImage from '../assets/hero-bg.jpg'
  const backgroundImage = "/images/fondoHome.png";

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505] flex items-center justify-center">
      {/* --- CONTENEDOR DE FONDO --- */}
      <div className="absolute inset-0 z-0">
        {/* Imagen de fondo */}
        <img
          src={backgroundImage}
          alt="Innovación Ambiental"
          className="w-full h-full object-cover opacity-40" // Opacidad reducida para no "matar" el diseño
        />

        {/* Capa de gradiente para legibilidad y acabado profesional */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/50 to-[#050505] z-10" />

        {/* El patrón de puntos técnico se mantiene encima de la imagen para dar textura */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px] z-20" />
      </div>

      {/* --- CONTENIDO (Z-30 para estar sobre todo) --- */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 text-center">
        {/* TAG */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 mb-8 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981] text-[10px] font-bold uppercase tracking-[0.3em]"
        >
          Consultoría de Innovación Ambiental
        </motion.span>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-8"
        >
          Ciencia y Tecnología <br />
          <span className="text-[#10b981]">para el Territorio.</span>
        </motion.h1>

        {/* P */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto text-lg md:text-2xl text-gray-400 mb-12 leading-relaxed font-light"
        >
          Diseñamos{" "}
          <span className="text-white font-medium">
            experiencias inmersivas y soluciones estratégicas
          </span>{" "}
          de conservación aplicada para{" "}
          <span className="text-white font-medium">
            instituciones, museos y ayuntamientos.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/contacto"
            className="group flex items-center gap-3 px-10 py-5 bg-[#10b981] text-black font-bold rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] no-underline"
          >
            Solicitar Propuesta Técnica{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="https://wa.me/tu-numero"
            className="flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all no-underline backdrop-blur-sm"
          >
            <MessageCircle className="w-5 h-5 text-[#10b981]" /> Contacto
            Directo
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 z-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#10b981] to-transparent" />
      </div>
    </section>
  );
};
const Diferenciacion = () => {
  const items = [
    {
      icon: <ShieldCheck strokeWidth={1.5} />,
      title: "Ciencia Aplicada",
      desc: "Auditamos la viabilidad técnica de proyectos ambientales. No somos una entidad asistencial; transformamos el dato científico en un activo de gestión territorial.",
      bg: "/images/fondo1.png", // Vinculamos cada imagen
    },
    {
      icon: <Zap strokeWidth={1.5} />,
      title: "Tecnología Inmersiva",
      desc: "Diseñamos entornos VR/AR de alta fidelidad para la transferencia de conocimiento. Tecnología con propósito educativo que elimina la barrera entre el ciudadano.",
      bg: "/images/fondo2.png",
    },
    {
      icon: <Globe strokeWidth={1.5} />,
      title: "Soluciones Institucionales",
      desc: "Implementamos estrategias de conservación y SbN alineadas con los objetivos de resiliencia de administraciones públicas y Smart Cities.",
      bg: "/images/fondo3.png",
    },
  ];

  return (
    <section className="py-32 bg-[#050505] px-6 relative overflow-hidden border-b border-white/5">
      {/* --- FONDO GLOBAL TÉCNICO (Mantenemos el grid y los glows para cohesión) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[#10b981]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-[#10b981] text-xs font-bold tracking-[0.4em] uppercase mb-6">
            Diferenciación Estratégica
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
            No hacemos marketing ambiental. <br />
            <span className="text-zinc-500">
              Desarrollamos ingeniería para la conservación.
            </span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 rounded-[2rem] overflow-hidden border border-white/10 hover:border-[#10b981]/40 transition-all duration-500"
            >
              {/* --- IMAGEN DE FONDO DE TARJETA --- */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.bg}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 grayscale-[0.5] group-hover:grayscale-0"
                />
                {/* Overlay interno para asegurar que el texto sea el protagonista */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
              </div>

              {/* --- CONTENIDO DE LA TARJETA (Encima de la imagen) --- */}
              <div className="relative z-10">
                <div className="text-[#10b981] mb-8 w-12 h-12 p-3 bg-[#10b981]/5 rounded-xl border border-[#10b981]/10 group-hover:bg-[#10b981] group-hover:text-black transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-5">
                  {item.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed font-light text-lg group-hover:text-white transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
const Servicios = () => {
  const servicios = [
    {
      title: "Realidad Virtual",
      desc: "Inmersión total en biodiversidad.",
      icon: <Eye />,
      link: "/servicios/realidad-virtual",
    },
    {
      title: "Bat Night",
      desc: "Eventos nocturnos sensoriales.",
      icon: <Users />,
      link: "/servicios/bat-night",
    },
    {
      title: "Refugios Técnicos",
      desc: "Diseño e instalación de refugios.",
      icon: <Box />,
      link: "/servicios/refugios",
    },
    {
      title: "Consultoría",
      desc: "Formación y avales científicos.",
      icon: <BookOpen />,
      link: "/formacion",
    },
  ];

  return (
    <section className="py-24 bg-[#080808] px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
          Nuestras Líneas de <span className="text-[#10b981]">Acción</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((s, i) => (
            <Link
              key={i}
              to={s.link}
              className="group p-8 rounded-3xl bg-[#0c0c0c] border border-white/5 hover:bg-[#10b981] transition-all duration-500 no-underline"
            >
              <div className="text-[#10b981] group-hover:text-black mb-16 transition-colors">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-black mb-2">
                {s.title}
              </h4>
              <p className="text-gray-500 group-hover:text-black/70 text-sm">
                {s.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Credibilidad = () => (
  <section className="py-24 bg-[#050505] border-y border-white/5">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
      {[
        { n: "+5k", t: "Personas Alcanzadas" },
        { n: "24", t: "Ediciones Realizadas" },
        { n: "+120", t: "Refugios Instalados" },
        { n: "15", t: "Alianzas Activas" },
      ].map((s, i) => (
        <div key={i}>
          <div className="text-4xl font-bold text-white mb-2">{s.n}</div>
          <div className="text-[#10b981] text-xs font-bold uppercase tracking-widest">
            {s.t}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Vision = () => (
  <section className="py-24 bg-[#050505] px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
          MUMA <span className="text-[#10b981]">Innovation Lab</span>
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Estamos desarrollando la próxima capa de interacción con el
          territorio: mapas móviles y monitorización de datos en tiempo real
          para una gestión ambiental inteligente.
        </p>
        <div className="flex items-center gap-4 text-[#10b981] font-bold italic">
          <BarChart3 className="w-6 h-6" /> Próximamente: Ecosistema Digital
          MUMA
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="w-72 h-[500px] bg-[#10b981]/20 rounded-[3rem] border-4 border-white/10 mx-auto overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)]">
          <div className="p-6 text-white/20 text-center mt-20 italic">
            Visualización del Mapa...
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTAFinal = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto p-12 rounded-[2rem] bg-gradient-to-br from-[#10b981] to-[#059669] text-center shadow-[0_20px_50px_rgba(16,185,129,0.2)]">
      <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
        ¿Lideramos el cambio juntos?
      </h2>
      <p className="text-black/80 text-lg mb-10 max-w-xl mx-auto">
        Transforma tu institución con soluciones basadas en ciencia y tecnología
        inmersiva.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contacto"
          className="px-10 py-4 bg-black text-white font-bold rounded-xl hover:scale-105 transition-all no-underline"
        >
          Solicitar Presupuesto
        </Link>
        <button className="px-10 py-4 bg-transparent border-2 border-black/20 text-black font-bold rounded-xl hover:bg-black/5 transition-all">
          Ver Casos de Éxito
        </button>
      </div>
    </div>
  </section>
);

// --- COMPONENTE PRINCIPAL ---

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-[#10b981] selection:text-black">
      <Hero />
      <Diferenciacion />
      <Servicios />
      <Credibilidad />
      <Vision />
      <CTAFinal />
      <footer className="py-12 text-center text-gray-600 border-t border-white/5 text-sm uppercase tracking-widest">
        © 2026 MUMA SL — Conservación, Ciencia e Innovación.
      </footer>
    </main>
  );
}
