import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Check,
  PencilRuler,
  Hammer,
  MapPin,
  Leaf,
  Camera,
  ChevronLeft,
  ChevronRight,
  Box,
  BugOff,
  CircleDollarSign,
  TreePine,
} from "lucide-react";

// Importación de componentes comunes
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const varianteSeccion = {
  oculto: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Refugios() {
  // --- ESTADOS ---
  const [indiceActivo, setIndiceActivo] = useState(0);
  const [hectareas, setHectareas] = useState(1);

  // --- DATOS CARRUSEL ---
  const modelos = [
    {
      titulo: "Refugio Artesanal Individual",
      subtitulo: "Jardines y Entornos Urbanos",
      descripcion:
        "Diseño compacto de 2 cámaras. Fabricado a mano con madera selecta y detalles en impresión 3D. Ideal para fachadas o árboles en entornos residenciales.",
      iconos: ["Madera Técnica", "Resistente UV", "Artesanal"],
      color: "from-emerald-500/20",
      //imagen añadida
      imagen: "/images/refugio_simple.png"
    },
    {
      titulo: "Modelo Finca Agrícola",
      subtitulo: "Alta Capacidad de Control",
      descripcion:
        "Refugio de gran formato diseñado para maximizar la colonización en cultivos. Ventilación reforzada y aislamiento térmico superior para insolación intensa.",
      iconos: ["Gran Formato", "Aislamiento Pro", "Agrícola"],
      color: "from-marca-principal/20",
      imagen: "/images/refugio_doble.png"

    },
    {
      titulo: "Estación Smart IoT",
      subtitulo: "Monitorización Científica",
      descripcion:
        "Equipado con sensores infrarrojos de ocupación y telemetría de temperatura/humedad. Envía datos en tiempo real para estudios de biodiversidad.",
      iconos: ["Sensores 4.0", "Telemetría", "Resistente"],
      color: "from-blue-500/20",
    },
  ];

  // --- LÓGICA ---
  const siguiente = () =>
    setIndiceActivo((prev) => (prev + 1) % modelos.length);
  const anterior = () =>
    setIndiceActivo((prev) => (prev - 1 + modelos.length) % modelos.length);

  const costePesticidaPorHa = 250;
  const porcentajeAhorro = 0.7;
  const ahorroDinero = hectareas * costePesticidaPorHa * porcentajeAhorro;
  const pesticidaEvitado = hectareas * 12;
  const refugiosNecesarios = Math.ceil(hectareas * 1.5);

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Refugios para murciélagos | MUMA BAT COMPANY</title>
        <meta
          name="description"
          content="Infraestructura de conservación y control biológico de plagas con tecnología 3D y madera técnica."
        />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-fondo-base pt-24">
        {/* ── SECCIÓN 1: DEFINICIÓN TÉCNICA ── */}
        <section
          id="definicion"
          className="py-24 px-6 bg-fondo-base border-t border-white/5"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="oculto"
              whileInView="visible"
              viewport={{ once: true }}
              variants={varianteSeccion}
              className="mb-16 max-w-4xl"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-texto-titulo mb-6">
                Ingeniería para la vida: <br />
                <span className="text-marca-principal">
                  ¿Qué es un refugio MUMA?
                </span>
              </h2>
              <p className="text-texto-secundario text-lg leading-relaxed">
                Nuestras estaciones son piezas únicas fabricadas en Málaga que
                combinan artesanía y tecnología 3D. Diseñadas para ofrecer un
                espacio bioclimático real que garantiza la protección frente a
                la humedad donde otras cajas comerciales fallan.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              <div className="p-8 bg-fondo-superficie rounded-2xl border border-white/5">
                <Hammer className="text-marca-principal mb-4" size={28} />
                <h4 className="text-texto-titulo font-bold mb-3">
                  Materiales Nobles
                </h4>
                <p className="text-sm text-texto-secundario italic">
                  Madera técnica e impresión 3D con materiales biodegradables y
                  compostables.
                </p>
              </div>
              <div className="p-8 bg-fondo-superficie rounded-2xl border border-white/5">
                <PencilRuler className="text-marca-principal mb-4" size={28} />
                <h4 className="text-texto-titulo font-bold mb-3">
                  Diseño Bioclimático
                </h4>
                <p className="text-sm text-texto-secundario italic">
                  2 cámaras grandes con superficies rayadas para facilitar el
                  agarre y la elección térmica.
                </p>
              </div>
              <div className="p-8 bg-fondo-superficie rounded-2xl border border-white/5">
                <ShieldCheck className="text-marca-principal mb-4" size={28} />
                <h4 className="text-texto-titulo font-bold mb-3">
                  Ensamblaje Robusto
                </h4>
                <p className="text-sm text-texto-secundario italic">
                  Uniones mediante tornillos de alta calidad, resistente a las
                  inclemencias del tiempo.
                </p>
              </div>
            </div>

            <motion.div
              initial="oculto"
              whileInView="visible"
              viewport={{ once: true }}
              variants={varianteSeccion}
              className="bg-fondo-superficie rounded-3xl border border-white/10 overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 lg:p-14 bg-marca-principal/5">
                  <h3 className="text-2xl font-bold text-marca-principal mb-6 flex items-center gap-2">
                    <Check size={24} /> El Estándar MUMA
                  </h3>
                  <ul className="space-y-4 text-texto-principal text-sm">
                    <li className="flex gap-2">
                      <Check size={16} className="text-marca-principal" /> Sin
                      rendijas: Aislamiento térmico total.
                    </li>
                    <li className="flex gap-2">
                      <Check size={16} className="text-marca-principal" /> Sin
                      peligros: Sin clavos ni siliconas tóxicas.
                    </li>
                    <li className="flex gap-2">
                      <Check size={16} className="text-marca-principal" />{" "}
                      Durabilidad: No se dobla ni se agrieta al sol.
                    </li>
                    <li className="flex gap-2">
                      <Check size={16} className="text-marca-principal" />{" "}
                      Seguimiento: Georeferenciados y numerados.
                    </li>
                  </ul>
                </div>
                <div className="p-10 lg:p-14 border-l border-white/5 bg-black/20">
                  <h3 className="text-2xl font-bold text-red-500/80 mb-6">
                    Cajas Comerciales
                  </h3>
                  <ul className="space-y-4 text-texto-secundario text-sm opacity-70">
                    <li>• Rendijas que filtran aire y humedad.</li>
                    <li>• Clavos y siliconas que dañan al animal.</li>
                    <li>• Madera de baja calidad que se deforma.</li>
                    <li>• Sin ventilación ni superficies de aterrizaje.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SECCIÓN 2: CARRUSEL DE MODELOS ── */}
        <section className="py-24 px-6 bg-fondo-secundario overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs font-bold tracking-[0.3em] text-marca-principal uppercase mb-4">
                Catálogo MUMA
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-texto-titulo">
                Modelos exclusivos
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10 order-2 lg:order-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={indiceActivo}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="text-marca-principal font-bold text-sm mb-2 block uppercase tracking-widest">
                      {modelos[indiceActivo].subtitulo}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-texto-titulo mb-6 leading-tight">
                      {modelos[indiceActivo].titulo}
                    </h3>
                    <p className="text-texto-secundario text-lg leading-relaxed mb-8">
                      {modelos[indiceActivo].descripcion}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-10">
                      {modelos[indiceActivo].iconos.map((tag, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 rounded-full bg-fondo-superficie border border-white/5 text-xs font-bold text-texto-titulo"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="flex gap-4">
                  <button
                    onClick={anterior}
                    className="p-4 rounded-full border border-white/10 hover:bg-white/5 text-texto-titulo"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={siguiente}
                    className="p-4 rounded-full border border-white/10 hover:bg-white/5 text-texto-titulo"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={indiceActivo}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`relative aspect-square rounded-3xl bg-gradient-to-br ${modelos[indiceActivo].color} to-transparent border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center`}
                  >
                    {/* ── AQUÍ VA LA IMAGEN ── */}
                    <img
                      src={modelos[indiceActivo].imagen}
                      alt={modelos[indiceActivo].titulo}
                      className="w-full h-full object-cover" // object-cover hace que la foto llene el cuadro sin deformarse
                    />

                    {/* Overlay*/}
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />

                    <Camera
                      size={24}
                      className="absolute bottom-6 right-6 text-white/40"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 3: BENEFICIOS AGRICULTURA ── */}
        {/* ── SECCIÓN: ARGUMENTOS ESTRATÉGICOS PARA EL AGRICULTOR ── */}
        <section className="py-24 px-6 bg-fondo-superficie">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-texto-titulo mb-6">
                Más allá del ahorro:{" "}
                <span className="text-marca-principal">Valor de Mercado</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-fondo-base rounded-3xl border border-white/5">
                <div className="text-marca-principal font-bold text-4xl mb-4">
                  01
                </div>
                <h4 className="text-xl font-bold text-texto-titulo mb-3">
                  Acceso a Mercados Premium
                </h4>
                <p className="text-sm text-texto-secundario">
                  Facilita la obtención de certificaciones ecológicas y de
                  "Residuo Cero", permitiendo vender tu cosecha a un precio por
                  kilo superior en mercados europeos.
                </p>
              </div>

              <div className="p-8 bg-fondo-base rounded-3xl border border-white/5">
                <div className="text-marca-principal font-bold text-4xl mb-4">
                  02
                </div>
                <h4 className="text-xl font-bold text-texto-titulo mb-3">
                  Menos Horas de Maquinaria
                </h4>
                <p className="text-sm text-texto-secundario">
                  Reduce los pases de tractor, ahorrando en gasoil,
                  mantenimiento de maquinaria y evitando la compactación
                  excesiva del suelo de cultivo.
                </p>
              </div>

              <div className="p-8 bg-fondo-base rounded-3xl border border-white/5">
                <div className="text-marca-principal font-bold text-4xl mb-4">
                  03
                </div>
                <h4 className="text-xl font-bold text-texto-titulo mb-3">
                  Prevención Ininterrumpida
                </h4>
                <p className="text-sm text-texto-secundario">
                  A diferencia de los tratamientos puntuales, los murciélagos
                  mantienen una vigilancia constante, eliminando las plagas
                  antes de que depositen sus larvas en el fruto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 4: CALCULADORA ── */}
        <section
          id="agricultura"
          className="py-24 px-6 bg-fondo-secundario border-t border-white/5"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial="oculto"
                whileInView="visible"
                viewport={{ once: true }}
                variants={varianteSeccion}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-texto-titulo mb-6">
                  Ahorra miles de Euros en pesticidas
                </h2>
                <p className="text-texto-secundario text-lg mb-8">
                  Sustituye tratamientos químicos recurrentes por una colonia
                  activa de quirópteros.
                </p>
                <div className="p-6 bg-fondo-superficie rounded-2xl border border-white/5">
                  <h4 className="text-texto-titulo font-bold mb-4 flex items-center gap-2">
                    <BugOff size={20} className="text-marca-principal" /> Plagas
                    controladas:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-texto-secundario">
                    <li>• Mosca del Olivo</li>
                    <li>• Polilla del Racimo</li>
                    <li>• Procesionaria</li>
                    <li>• Mosquito Tigre</li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-fondo-superficie p-8 rounded-3xl border border-marca-principal/20 shadow-2xl"
              >
                <h3 className="text-xl font-bold text-texto-titulo mb-8 flex items-center gap-3">
                  <CircleDollarSign className="text-marca-principal" />{" "}
                  Calculadora de Ahorro
                </h3>
                <div className="mb-8">
                  <div className="flex justify-between mb-4">
                    <label className="text-sm font-bold text-texto-secundario uppercase">
                      Superficie
                    </label>
                    <span className="text-marca-principal font-mono text-xl font-bold">
                      {hectareas} Ha
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={hectareas}
                    onChange={(e) => setHectareas(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-marca-principal"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between p-4 bg-black/20 rounded-xl">
                    <span className="text-xs text-texto-secundario">
                      Ahorro anual
                    </span>
                    <span className="text-xl font-bold text-marca-principal">
                      ~ {ahorroDinero.toLocaleString()} €
                    </span>
                  </div>
                  <div className="flex justify-between p-4 bg-marca-principal/10 rounded-xl border border-marca-principal/20">
                    <span className="text-xs text-texto-secundario">
                      Refugios MUMA
                    </span>
                    <span className="text-xl font-bold text-marca-principal">
                      {refugiosNecesarios}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA / CONTACTO ── */}
        <section
          id="contacto"
          className="bg-fondo-base py-20 px-6 border-t border-white/5"
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial="oculto"
              whileInView="visible"
              viewport={{ once: true }}
              variants={varianteSeccion}
            >
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-4">
                Siguiente paso
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-5">
                ¿Tienes un espacio en mente?
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:info@murcielagosmalaga.com"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-marca-principal text-black no-underline transition-transform hover:scale-105"
                >
                  Escribir por email
                </a>
                <a
                  href="https://wa.me/34664213450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-white/15 text-texto-principal hover:bg-fondo-superficie transition-all no-underline"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
