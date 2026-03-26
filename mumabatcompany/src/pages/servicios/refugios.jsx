import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

// Importación de componentes comunes
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useLang } from "../../context/LangContext";
import { refugiosI18n } from "../../data/i18n/refugiosI18n";

const varianteSeccion = {
  oculto: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Refugios() {
  const { locale } = useLang();
  const t = refugiosI18n[locale] || refugiosI18n.es;

  // --- ESTADOS ---
  const [indiceActivo, setIndiceActivo] = useState(0);
  const [hectareas, setHectareas] = useState(1);

  // --- LÓGICA ---
  const siguiente = () =>
    setIndiceActivo((prev) => (prev + 1) % t.modelos.length);
  const anterior = () =>
    setIndiceActivo((prev) => (prev - 1 + t.modelos.length) % t.modelos.length);

  const costePesticidaPorHa = 250;
  const porcentajeAhorro = 0.7;
  const ahorroDinero = hectareas * costePesticidaPorHa * porcentajeAhorro;
  const refugiosNecesarios = Math.ceil(hectareas * 1.5);

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>{t.helmetTitle}</title>
        <meta name="description" content={t.helmetDesc} />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-fondo-base pt-24">
        {/* ── BANNER CTA SUPERIOR ── */}
        <div className="bg-fondo-secundario border-b border-white/5 px-6 py-5 pt-20">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-texto-secundario">
              <span className="text-texto-titulo font-semibold">
                {t.bannerText1}
              </span>{" "}
              {t.bannerText2}
            </p>
            <div className="flex gap-3 shrink-0">
              <a
                href="mailto:info@murcielagosmalaga.com?subject=Solicitud%20presupuesto%20refugios%20MUMA"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 no-underline"
              >
                {t.bannerCta1}
              </a>
              <a
                href="https://wa.me/34664213450"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold border border-white/15 text-texto-principal hover:bg-fondo-superficie transition-all duration-200 no-underline"
              >
                {t.bannerCta2}
              </a>
            </div>
          </div>
        </div>

        {/* ── SECCIÓN 1: DEFINICIÓN TÉCNICA ── */}
        <section id="definicion" className="py-24 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="oculto"
              whileInView="visible"
              viewport={{ once: true }}
              variants={varianteSeccion}
              className="mb-16 max-w-4xl"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-texto-titulo mb-6 leading-tight">
                {t.definicionTitle1} <br />
                <span className="text-marca-principal">
                  {t.definicionTitle2}
                </span>
              </h2>
              <p className="text-texto-secundario text-lg leading-relaxed">
                {t.definicionDesc}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {t.featCards.map((card, i) => (
                <div key={i} className="p-8 bg-fondo-superficie rounded-3xl border border-white/5">
                  <h4 className="text-texto-titulo font-bold mb-3">
                    {card.titulo}
                  </h4>
                  <p className="text-sm text-texto-secundario italic">
                    {card.desc}
                  </p>
                </div>
              ))}
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
                    <Check size={24} /> {t.estandarTitle}
                  </h3>
                  <ul className="space-y-4 text-texto-principal text-sm">
                    {t.estandarItems.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <Check size={16} className="text-marca-principal shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-10 lg:p-14 border-l border-white/5 bg-black/20">
                  <h3 className="text-2xl font-bold text-red-500/80 mb-6">
                    {t.comercialTitle}
                  </h3>
                  <ul className="space-y-4 text-texto-secundario text-sm opacity-70">
                    {t.comercialItems.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
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
                {t.catalogoEyebrow}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-texto-titulo">
                {t.catalogoTitle}
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
                      {t.modelos[indiceActivo].subtitulo}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-texto-titulo mb-6 leading-tight">
                      {t.modelos[indiceActivo].titulo}
                    </h3>
                    <p className="text-texto-secundario text-lg leading-relaxed mb-8">
                      {t.modelos[indiceActivo].descripcion}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-10">
                      {t.modelos[indiceActivo].iconos.map((tag, i) => (
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
                    className="p-4 rounded-full border border-white/10 hover:bg-white/5 text-texto-titulo transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={siguiente}
                    className="p-4 rounded-full border border-white/10 hover:bg-white/5 text-texto-titulo transition-colors"
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
                    className={`relative aspect-square rounded-3xl bg-linear-to-br ${t.modelos[indiceActivo].color} to-transparent border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center`}
                  >
                    <img
                      src={t.modelos[indiceActivo].imagen}
                      alt={t.modelos[indiceActivo].titulo}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 3: VALOR DE MERCADO ── */}
        <section className="py-24 px-6 bg-fondo-base">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-texto-titulo mb-6">
                {t.mercadoTitle1}{" "}
                <span className="text-marca-principal">{t.mercadoTitle2}</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.mercadoCards.map((card, i) => (
                <div key={i} className="p-8 bg-fondo-superficie rounded-3xl border border-white/5 group hover:border-marca-principal/30 transition-all">
                  <h4 className="text-xl font-bold text-texto-titulo mb-3">
                    {card.titulo}
                  </h4>
                  <p className="text-sm text-texto-secundario leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
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
                <h2 className="text-3xl md:text-5xl font-bold text-texto-titulo mb-6 text-balance">
                  {t.calcTitle}
                </h2>
                <p className="text-texto-secundario text-lg mb-8 leading-relaxed">
                  {t.calcDesc}
                </p>
                <div className="p-6 bg-fondo-superficie rounded-2xl border border-white/5">
                  <h4 className="text-texto-titulo font-bold mb-4 flex items-center gap-2">
                    {t.calcPlagasTitle}
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-texto-secundario uppercase tracking-widest font-bold">
                    {t.calcPlagas.map((plaga, i) => (
                      <li key={i}>• {plaga}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-fondo-superficie p-8 rounded-3xl border border-marca-principal/20 shadow-2xl"
              >
                <h3 className="text-xl font-bold text-texto-titulo mb-8 flex items-center gap-3">
                  {t.calcCardTitle}
                </h3>
                <div className="mb-8">
                  <div className="flex justify-between mb-4 items-end">
                    <label className="text-sm font-bold text-texto-secundario uppercase tracking-widest">
                      {t.calcLabelSuperficie}
                    </label>
                    <span className="text-marca-principal font-mono text-2xl font-bold">
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
                  <div className="flex justify-between p-5 bg-black/20 rounded-2xl">
                    <span className="text-xs text-texto-secundario uppercase font-bold tracking-widest">
                      {t.calcLabelAhorro}
                    </span>
                    <span className="text-xl font-bold text-marca-principal">
                      ~ {ahorroDinero.toLocaleString()} €
                    </span>
                  </div>
                  <div className="flex justify-between p-5 bg-marca-principal/10 rounded-2xl border border-marca-principal/20">
                    <span className="text-xs text-texto-secundario uppercase font-bold tracking-widest">
                      {t.calcLabelRefugios}
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

        {/* ── SECCIÓN 5: IMPACTO URBANO ── */}
        <section className="py-24 px-6 bg-fondo-base border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="oculto"
              whileInView="visible"
              viewport={{ once: true }}
              variants={varianteSeccion}
              className="text-center mb-16"
            >
              <p className="text-xs font-bold tracking-[0.3em] text-marca-principal uppercase mb-4">
                {t.urbanoEyebrow}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-texto-titulo">
                {t.urbanoTitle}
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.urbanoStats.map((stat, i) => (
                <div key={i} className="p-8 bg-fondo-superficie rounded-3xl border border-white/5 flex flex-col items-center text-center group hover:border-marca-principal/30 transition-all">
                  <h4 className="text-4xl font-extrabold text-texto-titulo mb-2">
                    {stat.valor}
                  </h4>
                  <p className="text-xs font-bold text-marca-principal uppercase tracking-widest mb-4">
                    {stat.etiqueta}
                  </p>
                  <p className="text-sm text-texto-secundario leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center text-[10px] text-texto-secundario/40 mt-12 uppercase tracking-[0.2em]"
            >
              {t.urbanoDisclaimer}{" "}
              <a
                href="https://secemu.org/"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-marca-principal transition-colors"
              >
                SECEMU
              </a>{" "}
              {t.urbanoDis2}{" "}
              <a
                href="https://www.batcon.org/"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-marca-principal transition-colors"
              >
                BCI
              </a>
              .
            </motion.p>
          </div>
        </section>

        {/* ── SECCIÓN 6: FAQ ── */}
        <section className="py-24 px-6 bg-fondo-secundario border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="oculto"
              whileInView="visible"
              viewport={{ once: true }}
              variants={varianteSeccion}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-texto-titulo mb-4">
                {t.faqTitle}
              </h2>
              <p className="text-texto-secundario italic">
                {t.faqSubtitle}
              </p>
            </motion.div>
            <div className="space-y-4">
              {t.faq.map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-fondo-superficie rounded-2xl border border-white/5"
                >
                  <h4 className="text-texto-titulo font-bold mb-2 flex items-center gap-3">
                    <span className="text-marca-principal font-mono text-sm">
                      0{i + 1}.
                    </span>
                    {item.q}
                  </h4>
                  <p className="text-sm text-texto-secundario leading-relaxed pl-8">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 7: CONTACTO ── */}
        <section
          id="contacto"
          className="bg-fondo-base py-24 px-6 border-t border-white/5 text-center"
        >
          <motion.div
            initial="oculto"
            whileInView="visible"
            viewport={{ once: true }}
            variants={varianteSeccion}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xs font-bold tracking-[0.3em] text-marca-principal uppercase mb-4">
              {t.contactoEyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-texto-titulo mb-8">
              {t.contactoTitle}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@murcielagosmalaga.com"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold bg-marca-principal text-black transition-transform hover:scale-105 no-underline"
              >
                {t.contactoCta1}
              </a>
              <a
                href="https://wa.me/34664213450"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold border border-white/10 text-texto-principal hover:bg-fondo-superficie transition-all no-underline"
              >
                {t.contactoCta2}
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
