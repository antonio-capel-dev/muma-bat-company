// Página MUMA — quiénes somos, origen, pilares, credenciales y cierre
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Camera, Newspaper, ArrowRight } from 'lucide-react'
import Footer from '../components/footer'
import { useLang } from '../context/LangContext'
import { nosotrosI18n } from '../data/i18n/nosotrosI18n'

const varianteSeccion = {
  oculto: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

// Imágenes de los pilares — no traducibles
const pilaresImgs = [
  { img: '/images/murcielago.webp',                         imgPos: 'object-center' },
  { img: '/images/chica-realidad-virtual.webp',             imgPos: 'object-top' },
  { img: '/images/1batnights.webp',                         imgPos: 'object-center' },
]

// Imágenes de credenciales — no traducibles
const credencialesImgs = [
  { img: '/images/Murcielagos-Malaga-ST3ER-Proyect-2-1024x266.webp' },
  { img: '/images/Logo_SECEMU.webp' },
  { img: '/images/EUROBATS_logo.webp' },
  { img: '/images/La-Brujula-150x150.webp' },
]

// Imágenes de clientes — no traducibles
const clientesImgs = [
  { img: '/images/museos.webp',           imgPos: 'object-top' },
  { img: '/images/dentro-cueva.webp',     imgPos: 'object-center' },
  { img: '/images/refugio_doble.webp',    imgPos: 'object-center' },
  { img: '/images/bat-night-eslovenia.webp', imgPos: 'object-center' },
]

// URLs de alianzas — no traducibles
const alianzasImagenes = [
  { nombre: 'Junta de Andalucía',              img: '/images/junta-andalucia.webp',         url: 'https://www.juntadeandalucia.es' },
  { nombre: 'Málaga TechPark',                  img: '/images/malaga-tech-park.webp',         url: 'https://www.ptp.es' },
  { nombre: 'Fundación BioParc',                img: '/images/fundacion biopark.webp',        url: 'https://www.bioparcfuengirola.es' },
  { nombre: 'Plaza Mayor Málaga',               img: '/images/plaza-mayor.webp',              url: 'https://www.plazamayor.es' },
  { nombre: 'Centro Europeo de Empresas',       img: '/images/centro-europeo-empresas.webp',  url: 'https://www.ceei.es' },
  { nombre: 'Polo de Contenido Digital',        img: '/images/polo-contenido-digital.webp',   url: '#' },
  { nombre: 'Red de Emprendedores',             img: '/images/red-emprendedores.webp',        url: '#' },
  { nombre: 'Unión Europea — Proyecto ST3ER',   img: '/images/europa.webp',                    url: '#' },
]

const medios = [
  { nombre: 'La Opinión de Málaga', img: '/images/La-opinion-de-Malaga.webp' },
  { nombre: 'Málaga Hoy',           img: '/images/malaga-hoy.webp' },
  { nombre: 'El Español',           img: '/images/El-Espanol-de-Malaga.webp' },
  { nombre: 'Andalucía Lab',        img: '/images/Andalucia-Lab.webp' },
  { nombre: 'Hola Andalucía',       img: '/images/hola-andalucia.webp' },
  { nombre: 'Canal Málaga',         img: '/images/canal_malaga.webp' },
]

export default function Nosotros() {
  const { locale } = useLang()
  const t = nosotrosI18n[locale] || nosotrosI18n.es

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.pageDesc} />
        <meta property="og:title" content={t.ogTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mumabatcompany.com/nosotros" />
        <link rel="canonical" href="https://mumabatcompany.com/nosotros" />
      </Helmet>

      <main>

        {/* ── SECCIÓN 1: HERO DE MARCA ── */}
        <section className="relative bg-fondo-base pt-40 pb-0 px-6 overflow-hidden">

          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(31,225,167,0.07) 0%, transparent 65%)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl mx-auto text-center pb-16">

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-5"
            >
              {t.heroPill}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-texto-titulo mb-6"
            >
              {t.heroH1a}<br />
              <span className="text-marca-principal">{t.heroH1b}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-texto-secundario leading-relaxed max-w-2xl mx-auto mb-10"
            >
              {t.heroP}
            </motion.p>

            {/* Stats de credibilidad rápida */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {t.heroStats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-xl font-bold text-marca-principal">{stat.numero}</p>
                  <p className="text-xs text-texto-secundario mt-1 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Imagen de colonia — ancho completo, pegada al borde inferior del hero */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="relative max-w-5xl mx-auto rounded-t-3xl overflow-hidden"
            style={{ height: '420px' }}
          >
            <img
              src="/images/colonia_murcielago01.webp"
              alt={t.heroImgAlt}
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay degradado que conecta la imagen con la siguiente sección */}
            <div className="absolute inset-0 bg-gradient-to-t from-fondo-secundario via-transparent to-transparent" />
            {/* Etiqueta flotante */}
            <div className="absolute bottom-5 left-6 bg-fondo-base/80 backdrop-blur-sm border border-marca-principal/20 rounded-xl px-4 py-2">
              <p className="text-xs font-semibold text-marca-principal uppercase tracking-widest">{t.heroFloatLabel}</p>
              <p className="text-xs text-texto-secundario mt-0.5">{t.heroFloatSub}</p>
            </div>
          </motion.div>

        </section>

        {/* ── SECCIÓN 2: HISTORIA DE ORIGEN — el arco narrativo que pidió Francisco ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Columna texto */}
              <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}>
                <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">{t.origenPill}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-8">
                  {t.origenH2.split('\n').map((line, i, arr) => (
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  ))}
                </h2>
                {/* Frase clave destacada */}
                <blockquote className="border-l-2 border-marca-principal pl-5 mb-7">
                  <p className="text-texto-titulo font-semibold text-lg leading-snug">
                    {t.origenQuote}
                  </p>
                </blockquote>

                <div className="space-y-5 text-texto-secundario leading-relaxed text-base">
                  <p>{t.origenP1}</p>
                  <p>{t.origenP2}</p>
                  <p>
                    {t.origenP3a}<span className="text-texto-titulo font-medium">{t.origenP3b}</span>{t.origenP3c}
                  </p>
                </div>
              </motion.div>

              {/* Columna imagen */}
              <motion.div
                initial="oculto" whileInView="visible" viewport={{ once: true }}
                variants={{ oculto: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.65, delay: 0.15 } } }}
                className="rounded-2xl overflow-hidden"
                style={{ height: '580px' }}
              >
                <img
                  src="/images/solucion-ecologica-murcielagos-727x1024.webp"
                  alt={t.origenImgAlt}
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── SECCIÓN 3: TRES PILARES — los que Francisco identificó como fundamentales ── */}
        <section className="bg-fondo-base py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">{t.pilaresPill}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">{t.pilaresH2}</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">{t.pilaresP}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {t.pilares.map(({ titulo, texto, imgAlt }, i) => (
                <motion.div
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.12 } } }}
                  className="bg-fondo-superficie rounded-2xl overflow-hidden border border-white/5 hover:border-marca-principal/25 transition-colors duration-300 group"
                >
                  {/* Imagen */}
                  <div className="relative overflow-hidden" style={{ height: '240px' }}>
                    <img
                      src={pilaresImgs[i].img}
                      alt={imgAlt}
                      className={`w-full h-full object-cover ${pilaresImgs[i].imgPos} transition-transform duration-700 group-hover:scale-105`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-fondo-superficie/80 via-fondo-superficie/10 to-transparent" />
                  </div>

                  {/* Contenido */}
                  <div className="p-7">
                    <h3 className="text-lg font-bold text-texto-titulo mb-3 leading-snug">{titulo}</h3>
                    <p className="text-sm text-texto-secundario leading-relaxed">{texto}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 3B: BATCAVE EXPERIENCE — producto estrella ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Imagen */}
              <div className="relative rounded-2xl overflow-hidden order-last lg:order-first" style={{ height: '420px' }}>
                <img
                  src="/images/Image_VRglases.webp"
                  alt={t.batcaveImgAlt}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fondo-secundario/60 via-transparent to-transparent" />
                {/* Badge "producto activo" */}
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-fondo-base/80 backdrop-blur-sm border border-marca-principal/30 rounded-xl px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-marca-principal animate-pulse shrink-0" />
                  <p className="text-xs font-semibold text-marca-principal tracking-wide">{t.batcaveBadge}</p>
                </div>
              </div>

              {/* Texto */}
              <div>
                <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">{t.batcavePill}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-6 leading-tight">
                  {t.batcaveH2a}<br />
                  <span className="text-marca-principal">{t.batcaveH2b}</span>
                </h2>
                <div className="space-y-4 text-texto-secundario leading-relaxed text-base mb-8">
                  <p>{t.batcaveP1}</p>
                  <p>{t.batcaveP2}</p>
                  <p className="text-texto-titulo font-medium">{t.batcaveP3}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {t.batcaveTags.map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full border border-marca-principal/20 text-xs text-marca-principal bg-marca-principal/5 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SECCIÓN 3D: A QUIÉN AYUDAMOS ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">{t.clientesPill}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">{t.clientesH2}</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">{t.clientesP}</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.clientes.map((perfil, i) => (
                <motion.div
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } } }}
                  className="bg-fondo-superficie rounded-2xl overflow-hidden border border-white/5 hover:border-marca-principal/25 transition-colors duration-300 group flex flex-col"
                >
                  {/* Imagen */}
                  <div className="relative overflow-hidden shrink-0" style={{ height: '180px' }}>
                    <img
                      src={clientesImgs[i].img}
                      alt={perfil.imgAlt}
                      className={`w-full h-full object-cover ${clientesImgs[i].imgPos} transition-transform duration-700 group-hover:scale-105`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-fondo-superficie/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 inline-block px-2.5 py-1 rounded-full bg-fondo-base/70 backdrop-blur-sm text-marca-principal text-xs font-semibold tracking-wide">
                      {perfil.servicio}
                    </span>
                  </div>

                  {/* Texto */}
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <h3 className="text-base font-bold text-texto-titulo leading-snug">{perfil.tipo}</h3>
                    <p className="text-sm text-texto-secundario leading-relaxed">{perfil.descripcion}</p>
                    <p className="text-xs text-texto-secundario/50 mt-auto pt-3 border-t border-white/5">{perfil.ejemplo}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}
              className="text-center mt-10"
            >
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 text-sm font-semibold text-marca-principal hover:underline"
              >
                {t.clientesCta}
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── SECCIÓN 4: CREDENCIALES — el proyecto europeo y avales científicos ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">{t.credencialesPill}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">{t.credencialesH2}</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">{t.credencialesP}</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {t.credenciales.map((cred, i) => (
                <motion.div
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } } }}
                  className="bg-fondo-superficie rounded-2xl overflow-hidden border border-white/5 hover:border-marca-principal/25 transition-colors duration-300"
                >
                  {/* Imagen del aval */}
                  <div className="flex items-center justify-center px-8 py-6">
                    <div className="bg-white rounded-2xl flex items-center justify-center px-6 py-4 w-full" style={{ minHeight: '90px' }}>
                      <img
                        src={credencialesImgs[i].img}
                        alt={cred.imgAlt}
                        className="max-h-[70px] max-w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Texto */}
                  <div className="p-6 flex gap-4">
                    <div className="shrink-0 mt-0.5">
                      <span className="inline-block px-2 py-1 rounded-lg bg-marca-principal/10 text-marca-principal text-xs font-bold tracking-wide">
                        {cred.sigla}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-texto-titulo mb-2 leading-snug">{cred.nombre}</h3>
                      <p className="text-sm text-texto-secundario leading-relaxed">{cred.descripcion}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 5: EQUIPO ── */}
        <section className="bg-fondo-base py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">{t.equipoPill}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo">{t.equipoH2}</h2>
            </motion.div>

            <motion.div
              initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {/* Antonio Moret */}
              <div className="bg-fondo-superficie rounded-2xl overflow-hidden border border-white/5 hover:border-marca-principal/25 transition-colors duration-300">
                <img
                  src="/images/antonio-moret.webp"
                  alt={t.antonio.imgAlt}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-7">
                  <p className="text-xs font-semibold text-marca-principal uppercase tracking-wider mb-1">{t.antonio.rol}</p>
                  <h3 className="text-lg font-bold text-texto-titulo mb-3">{t.antonio.nombre}</h3>
                  <p className="text-sm text-texto-secundario leading-relaxed mb-4">{t.antonio.p1}</p>
                  <p className="text-sm text-texto-secundario leading-relaxed">{t.antonio.p2}</p>
                </div>
              </div>

              {/* Laura Smit */}
              <div className="bg-fondo-superficie rounded-2xl overflow-hidden border border-white/5 hover:border-marca-principal/25 transition-colors duration-300">
                <img
                  src="/images/laura.webp"
                  alt={t.laura.imgAlt}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-7">
                  <p className="text-xs font-semibold text-marca-principal uppercase tracking-wider mb-1">{t.laura.rol}</p>
                  <h3 className="text-lg font-bold text-texto-titulo mb-3">{t.laura.nombre}</h3>
                  <p className="text-sm text-texto-secundario leading-relaxed">{t.laura.p1}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SECCIÓN 6: POR QUÉ LOS MURCIÉLAGOS IMPORTAN — conectado a la propuesta ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">

              {/* Stats + cabecera */}
              <div>
                <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="mb-10">
                  <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">{t.datosPill}</p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-3">{t.datosH2}</h2>
                  <p className="text-texto-secundario max-w-xl text-sm leading-relaxed">{t.datosP}</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {t.datosMurcielagos.map((dato, i) => (
                    <motion.div
                      key={i}
                      initial="oculto" whileInView="visible" viewport={{ once: true }}
                      variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } } }}
                      className="bg-fondo-superficie rounded-2xl p-6 border border-white/5 hover:border-marca-principal/20 transition-colors duration-300 flex gap-5 items-start"
                    >
                      <div className="shrink-0 min-w-[70px]">
                        <p className="text-2xl font-bold text-marca-principal leading-none">{dato.cifra}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-texto-titulo mb-1">{dato.titulo}</h3>
                        <p className="text-sm text-texto-secundario leading-relaxed">{dato.texto}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Imagen lateral — solo visible en lg+ */}
              <motion.div
                initial="oculto" whileInView="visible" viewport={{ once: true }}
                variants={{ oculto: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } } }}
                className="hidden lg:block sticky top-24 rounded-2xl overflow-hidden"
                style={{ height: '480px' }}
              >
                <img
                  src="/images/bat-night-eslovenia.webp"
                  alt={t.datosLateralImgAlt}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fondo-secundario/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-semibold text-marca-principal uppercase tracking-widest">{t.datosLateralLabel}</p>
                  <p className="text-xs text-white/60 mt-0.5">{t.datosLateralSub}</p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── SECCIÓN 7: ALIANZAS (carrusel) + MEDIOS ── */}
        <section className="bg-fondo-base py-20 overflow-hidden">

          {/* Keyframes del carrusel — inyectados una sola vez */}
          <style>{`
            @keyframes mumaScroll {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .muma-carrusel-track {
              animation: mumaScroll 32s linear infinite;
            }
            .muma-carrusel-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Cabecera */}
          <div className="px-6">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-12 max-w-4xl mx-auto">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">{t.alianzasPill}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">{t.alianzasH2}</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">{t.alianzasP}</p>
            </motion.div>
          </div>

          {/* Carrusel infinito — sin padding lateral para que llegue a los bordes */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Degradados de fade en los bordes */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, var(--color-fondo-base, #0a0f0d), transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, var(--color-fondo-base, #0a0f0d), transparent)' }} />

            <div className="flex overflow-hidden">
              {/* Track duplicado para loop infinito */}
              <div className="muma-carrusel-track flex gap-5 items-stretch" style={{ width: 'max-content' }}>
                {[...alianzasImagenes, ...alianzasImagenes].map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl overflow-hidden border border-white/5 hover:border-marca-principal/30 transition-colors duration-300 shrink-0"
                    style={{ width: '300px', height: '200px' }}
                    title={item.nombre}
                  >
                    <img
                      src={item.img}
                      alt={item.nombre}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Medios */}
          <div className="px-6 mt-14">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-8">
                <Newspaper size={14} className="text-marca-principal" aria-hidden="true" />
                <p className="text-xs font-semibold tracking-widest text-texto-secundario uppercase">{t.mediosLabel}</p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {medios.map((medio, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
                    style={{ height: '48px' }}
                    title={medio.nombre}
                  >
                    <img
                      src={medio.img}
                      alt={medio.nombre}
                      className="max-h-full max-w-35 object-contain"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </section>

        {/* ── SECCIÓN 8: CTA FINAL — conexión con servicios y contacto ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}
              className="border border-marca-principal/30 rounded-2xl p-10 sm:p-14 text-center"
            >
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-4">{t.ctaPill}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-texto-titulo mb-4">
                {t.ctaH2.split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </h2>
              <p className="text-texto-secundario leading-relaxed mb-10 max-w-lg mx-auto">
                {t.ctaP}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 no-underline"
                >
                  {t.ctaBtn1}
                </a>
                <a
                  href="/servicios/realidad-virtual"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border border-white/15 text-texto-principal hover:border-marca-principal/50 hover:text-marca-principal transition-colors duration-200 no-underline"
                >
                  {t.ctaBtn2}
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
