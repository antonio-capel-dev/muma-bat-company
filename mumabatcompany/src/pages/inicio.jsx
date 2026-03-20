import { motion } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  FlaskConical,
  Zap,
  Globe,
  Box,
  Eye,
  BookOpen,
  Moon,
} from "lucide-react";
import { Link } from "react-router-dom";

// --- COMPONENTES INTERNOS (BLOQUES) ---

const Hero = () => {
  const backgroundImage = "/images/fondoHome.png";

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505] flex items-center justify-center">
      {/* --- CONTENEDOR DE FONDO --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Trabajo de campo MUMA"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/50 to-[#050505] z-10" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px] z-20" />
      </div>

      {/* --- CONTENIDO --- */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 text-center">
        {/* TAG */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 mb-8 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981] text-[10px] font-bold uppercase tracking-[0.3em]"
        >
          Proyecto ST3ER &middot; SECEMU &middot; FEDER
        </motion.span>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-8"
        >
          Llevamos una cueva <br />
          <span className="text-[#10b981]">de murciélagos a tu espacio.</span>
        </motion.h1>

        {/* P */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto text-lg md:text-2xl text-gray-400 mb-12 leading-relaxed font-light"
        >
          Experiencias inmersivas, refugios certificados y Bat Nights para{" "}
          <span className="text-white font-medium">
            museos, ayuntamientos y espacios naturales.
          </span>{" "}
          Respaldados por el{" "}
          <span className="text-white font-medium">
            proyecto europeo ST3ER y SECEMU.
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
            to="/servicios/realidad-virtual"
            className="group flex items-center gap-3 px-10 py-5 bg-[#10b981] text-black font-bold rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] no-underline"
          >
            Ver la Batcave Experience{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/contacto"
            className="flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all no-underline backdrop-blur-sm"
          >
            <MessageCircle className="w-5 h-5 text-[#10b981]" /> Hablar con MUMA
          </Link>
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
      icon: <FlaskConical strokeWidth={1.5} />,
      title: "Ciencia de campo",
      desc: "Más de una década estudiando colonias, grabando ultrasonidos y construyendo el único archivo bioacústico privado de quirópteros ibéricos. El conocimiento no es decoración — es la base de cada servicio.",
      bg: "/images/fondo1.png",
    },
    {
      icon: <Zap strokeWidth={1.5} />,
      title: "Tecnología que tiene fondo",
      desc: "La Batcave Experience no es una recreación — es una cueva real digitalizada en 3D. Lista para instalar en museos, centros comerciales o espacios naturales sin obra ni infraestructura adicional.",
      bg: "/images/fondo2.png",
    },
    {
      icon: <Globe strokeWidth={1.5} />,
      title: "Comunidad e impacto real",
      desc: "Más de 700 personas en eventos MUMA durante 2025. Bat Nights, talleres científicos y actividades con ayuntamientos, reservas naturales y centros educativos. La conservación ocurre cuando la gente entiende.",
      bg: "/images/fondo3.png",
    },
  ];

  return (
    <section className="py-32 bg-[#050505] px-6 relative overflow-hidden border-b border-white/5">
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
            Por qué MUMA es diferente
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
            No hacemos marketing ambiental. <br />
            <span className="text-zinc-500">
              Hacemos trabajo de campo.
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
              <div className="absolute inset-0 z-0">
                <img
                  src={item.bg}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 grayscale-[0.5] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
              </div>

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
      desc: "La Batcave Experience: una cueva de murciélagos en tu espacio. Lista para instalar, sin obra.",
      icon: <Eye />,
      link: "/servicios/realidad-virtual",
    },
    {
      title: "Bat Nights",
      desc: "Eventos nocturnos con ultrasonidos y VR. Más de 200 personas por edición en 2025.",
      icon: <Moon />,
      link: "/servicios/bat-night",
    },
    {
      title: "Refugios",
      desc: "Refugios artesanales para colonias de murciélagos. Control biológico de plagas sin pesticidas.",
      icon: <Box />,
      link: "/servicios/refugios",
    },
    {
      title: "Consultoría",
      desc: "Asesoramiento científico con respaldo SECEMU y proyecto europeo ST3ER.",
      icon: <BookOpen />,
      link: "/servicios/educacion-ambiental",
    },
  ];

  return (
    <section className="py-24 bg-[#080808] px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
          Nuestras líneas de <span className="text-[#10b981]">acción</span>
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
        { n: "+700", t: "Personas en eventos 2025" },
        { n: "3", t: "Países proyecto ST3ER" },
        { n: "+120", t: "Refugios instalados" },
        { n: "15", t: "Alianzas activas" },
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
          Un archivo que{" "}
          <span className="text-[#10b981]">no existe en ningún otro sitio.</span>
        </h2>
        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
          Durante años de trabajo de campo, MUMA ha construido el único archivo bioacústico privado de quirópteros ibéricos: grabaciones reales, mapas de distribución y datos de colonias en tres países europeos.
        </p>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Ese conocimiento es la base de cada servicio que ofrecemos. No somos un centro de interpretación — somos el equipo que lo documentó.
        </p>
        <Link
          to="/nosotros"
          className="inline-flex items-center gap-2 text-[#10b981] font-bold hover:underline no-underline"
        >
          Conocer el equipo <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-4">
        {[
          { n: "ST3ER", desc: "Proyecto europeo SMP COSME — España, Portugal, Eslovenia" },
          { n: "SECEMU", desc: "Miembros activos. Atlas de distribución de quirópteros ibéricos" },
          { n: "EUROBATS", desc: "Alineados con el marco europeo de conservación de murciélagos" },
          { n: "FEDER", desc: "Financiación europea para el desarrollo de la Batcave Experience" },
        ].map((item, i) => (
          <div key={i} className="p-5 rounded-2xl bg-white/3 border border-white/8">
            <div className="text-[#10b981] text-xs font-bold tracking-widest uppercase mb-2">{item.n}</div>
            <p className="text-gray-400 text-sm leading-snug">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTAFinal = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto p-12 rounded-[2rem] bg-gradient-to-br from-[#10b981] to-[#059669] text-center shadow-[0_20px_50px_rgba(16,185,129,0.2)]">
      <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
        La Batcave Experience está lista. ¿Hablamos?
      </h2>
      <p className="text-black/80 text-lg mb-10 max-w-xl mx-auto">
        Sin obra, sin infraestructura. Montamos, operamos y recogemos. Tu espacio acoge la experiencia.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contacto"
          className="px-10 py-4 bg-black text-white font-bold rounded-xl hover:scale-105 transition-all no-underline"
        >
          Pedir información
        </Link>
        <Link
          to="/servicios/realidad-virtual"
          className="px-10 py-4 bg-transparent border-2 border-black/20 text-black font-bold rounded-xl hover:bg-black/5 transition-all no-underline"
        >
          Ver la experiencia completa
        </Link>
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
        &copy; 2026 MUMA BAT COMPANY &mdash; Ciencia, Tecnología y Conservación.
      </footer>
    </main>
  );
}
