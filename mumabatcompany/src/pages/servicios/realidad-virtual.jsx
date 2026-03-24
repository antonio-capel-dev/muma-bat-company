// Página — Realidad Virtual (ecosistema de 5 módulos)
//
// Estructura final según acuerdo de equipo:
//   1. Cabecera general "Realidad Virtual" (dentro-cueva.webp)
//   2. Bloque protagonista: MuMa VR² Cave Experience
//      — grid texto / stack de imágenes
//      — 4 pilares del servicio
//   3. Separador visual + grid 4 módulos complementarios (2×2)
//   4. Franja de logos de alianzas
//   5. CTA de conversión + formulario integrado

import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Award, Truck, Headset, Users,
  Globe, BookOpen, Gamepad2, Landmark,
  CheckCircle,
} from 'lucide-react'
import Footer from '../../components/footer'

/* ═══════════════════════════════════════════════════════════════════════════
   DATOS
   ═══════════════════════════════════════════════════════════════════════════ */

const PILARES = [
  { Icono: Headset, titulo: 'Contenido de cueva real',        desc: 'Desarrollado desde el conocimiento directo del hábitat subterráneo. No es recreación — es documentación.' },
  { Icono: Truck,   titulo: 'Llegamos con la cueva',          desc: 'Montamos, operamos y recogemos. Tu espacio acoge la experiencia sin obra ni infraestructura adicional.' },
  { Icono: Users,   titulo: 'Divulgador científico incluido', desc: 'Cada sesión la conduce alguien que conoce los murciélagos de verdad. La tecnología tiene fondo.' },
  { Icono: Award,   titulo: 'Aval de proyecto europeo',       desc: 'Investigación respaldada por SECEMU, Fundación Cueva de Nerja y Fondo Europeo de Desarrollo Regional (FEDER).' },
]

// Acento visual por módulo — muy sutil, diferencia sin romper coherencia
const MODULOS = [
  {
    Icono: Globe,
    titulo: 'MuMa Bats 360',
    descripcion:
      'Vídeos inmersivos en 360° grabados en entornos reales de murciélagos. Accesibles desde navegador o gafas VR, sin alterar los hábitats documentados.',
    acento: 'rgba(31,225,167,0.04)',
    proximamente: true,
  },
  {
    Icono: BookOpen,
    titulo: 'MuMa Virtual Bats',
    descripcion:
      'Fichas interactivas de especies con modelos 3D, hábitat, estado de conservación y archivo acústico. Un recurso científico y visual para museos, centros educativos y divulgación.',
    acento: 'rgba(96,165,250,0.04)',
    proximamente: true,
  },
  {
    Icono: Gamepad2,
    titulo: 'MuMa Game',
    descripcion:
      'Experiencia gamificada basada en conocimiento científico real. Para reforzar aprendizaje y participación en aulas, eventos y actividades de sensibilización.',
    acento: 'rgba(31,225,167,0.04)',
    proximamente: true,
  },
  {
    Icono: Landmark,
    titulo: 'Virtual Museum',
    descripcion:
      'Espacio digital para explorar el archivo visual, sonoro y narrativo de MUMA. Una experiencia expositiva online que no necesita paredes.',
    acento: 'rgba(96,165,250,0.04)',
    proximamente: true,
  },
]

const ALIANZAS = [
  { nombre: 'Junta de Andalucía',          logo: '/images/junta-andalucia.webp' },
  { nombre: 'Fundación Cueva de Nerja',     logo: '/images/cueva de nerja.webp' },
  { nombre: 'Málaga TechPark',              logo: '/images/malaga-tech-park.webp' },
  { nombre: 'BIC Euronova',                 logo: '/images/centro-europeo-empresas.webp' },
  { nombre: 'Fundación Bioparc',            logo: '/images/fundacion biopark.webp' },
  { nombre: 'Polo de Contenidos Digitales', logo: '/images/polo-contenido-digital.webp' },
  { nombre: 'Plaza Mayor',                  logo: '/images/plaza-mayor.webp' },
  { nombre: 'Red de Emprendedores',         logo: '/images/red-emprendedores.webp' },
]

/* ═══════════════════════════════════════════════════════════════════════════
   VARIANTES DE ANIMACIÓN
   ═══════════════════════════════════════════════════════════════════════════ */

const fadeUp = {
  oculto:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const fadeIn = {
  oculto:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

/* ═══════════════════════════════════════════════════════════════════════════
   SUB-COMPONENTES
   ═══════════════════════════════════════════════════════════════════════════ */

// Campo de formulario reutilizable
function Campo({ id, name, label, type = 'text', placeholder, required = false, autoComplete }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10px] font-bold text-texto-secundario uppercase tracking-[0.12em] mb-1.5"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full bg-fondo-base border border-white/10 rounded-xl px-4 py-3 text-sm text-texto-principal placeholder-texto-secundario/40 focus:outline-none focus:border-marca-principal/50 transition-colors duration-200"
      />
    </div>
  )
}

// Card de módulo secundario
function CardModulo({ Icono, titulo, descripcion, acento, proximamente, index }) {
  return (
    <article
      initial="oculto"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        oculto:  { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.08 } },
      }}
      className="rounded-2xl p-6 border border-white/5 hover:border-white/12 transition-colors duration-300 flex flex-col"
      style={{ background: `linear-gradient(135deg, #16212d 0%, #16212d 60%, ${acento} 100%)` }}
    >
      {/* Cabecera */}
      <div className="flex items-start gap-3 mb-5">
        <div className="w-11 h-11 rounded-xl bg-marca-principal/10 border border-marca-principal/20 flex items-center justify-center shrink-0 mt-0.5">
          <Icono size={20} className="text-marca-principal" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0 pt-1">
          <h3 className="text-base font-bold text-texto-titulo leading-tight">{titulo}</h3>
        </div>
        {proximamente && (
          <span className="text-[9px] font-bold tracking-[0.1em] text-marca-principal/70 uppercase bg-marca-principal/10 border border-marca-principal/20 px-2.5 py-1 rounded-lg shrink-0 mt-1">
            Próximamente
          </span>
        )}
      </div>

      {/* Descripción */}
      <p className="text-sm text-texto-secundario leading-relaxed">
        {descripcion}
      </p>
    </article>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTE PRINCIPAL
   ═══════════════════════════════════════════════════════════════════════════ */

export default function RealidadVirtual() {
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const nombre       = data.get('nombre') || ''
    const email        = data.get('email') || ''
    const organizacion = data.get('organizacion') || ''
    const tipoEspacio  = data.get('tipo_espacio') || ''
    const participantes = data.get('participantes') || ''
    const fecha        = data.get('fecha') || ''

    const cuerpo = [
      `Nombre: ${nombre}`,
      `Email: ${email}`,
      `Organización: ${organizacion}`,
      `Tipo de espacio: ${tipoEspacio}`,
      `Participantes estimados: ${participantes}`,
      `Fecha tentativa: ${fecha}`,
    ].join('\n')

    const subject = encodeURIComponent(`[Web VR] Solicitud demostración — ${nombre}`)
    const body    = encodeURIComponent(cuerpo)

    window.location.href = `mailto:info@murcielagosmalaga.com?subject=${subject}&body=${body}`
    setEnviado(true)
    form.reset()
  }

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>
          Realidad Virtual — Experiencias inmersivas sobre murciélagos | MUMA BAT COMPANY
        </title>
        <meta
          name="description"
          content="Tecnología inmersiva al servicio de los murciélagos. MuMa VR² Cave Experience y cuatro herramientas digitales para museos, ayuntamientos, hoteles y centros educativos."
        />
        <meta property="og:title" content="Realidad Virtual | MUMA BAT COMPANY" />
        <meta
          property="og:description"
          content="Cinco herramientas digitales para acercar a las personas a una especie que casi nadie ha visto de cerca."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://murcielagosmalaga.com/servicios/realidad-virtual" />
        <meta property="og:image" content="https://murcielagosmalaga.com/images/Image_VRglases.webp" />
        <link rel="canonical" href="https://murcielagosmalaga.com/servicios/realidad-virtual" />
      </Helmet>

      <main>

        {/* ══════════════════════════════════════════════════════════════════
            1. CABECERA GENERAL — Realidad Virtual
            ══════════════════════════════════════════════════════════════════ */}
        <section
          className="relative flex items-center justify-center text-center overflow-hidden"
          style={{ minHeight: '62vh' }}
          aria-label="Cabecera Realidad Virtual"
        >
          <img
            src="/images/dentro-cueva.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
          {/* Overlay oscuro */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(11,17,23,0.82) 0%, rgba(11,17,23,0.65) 50%, rgba(11,17,23,0.94) 100%)',
            }}
            aria-hidden="true"
          />
          {/* Halo marca */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(31,225,167,0.07) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto px-6 py-32 lg:py-40">
            <p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-[10px] font-bold tracking-[0.25em] text-marca-principal uppercase mb-5"
            >
              Realidad Virtual · MUMA BAT COMPANY
            </p>
            <h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-bold leading-[1.08] tracking-tight text-texto-titulo mb-6"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)' }}
            >
              Tecnología inmersiva al servicio de los murciélagos.
            </h1>
            <p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-lg text-texto-secundario leading-relaxed max-w-xl mx-auto mb-10"
            >
              Cinco herramientas digitales para acercar a las personas
              a una especie que casi nadie ha visto de cerca.
            </p>
            <div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 no-underline"
              >
                Pedir demostración <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Degradado inferior de fusión */}
          <div
            className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent 0%, #0b1117 100%)' }}
            aria-hidden="true"
          />
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            2. BLOQUE PROTAGONISTA — MuMa VR² Cave Experience
            ══════════════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden bg-fondo-base"
          aria-labelledby="cave-experience-titulo"
        >
          <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">

            {/* Encabezado de sección sobre el grid */}
            <div
              initial="oculto" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
              className="mb-14"
            >
              <p className="text-[10px] font-bold tracking-[0.22em] text-marca-principal uppercase mb-3">
                Investigación aplicada · Experiencia llave en mano
              </p>
              <h2
                id="cave-experience-titulo"
                className="font-bold leading-[1.1] tracking-tight text-texto-titulo"
                style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.75rem)' }}
              >
                MuMa VR² Cave Experience
              </h2>
            </div>

            {/* Grid principal: texto ↔ stack de imágenes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">

              {/* ── Texto ── */}
              <div
                initial="oculto" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
              >
                <p
                  className="font-bold leading-[1.12] tracking-tight text-texto-titulo mb-6"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.15rem)' }}
                >
                  Lleva una{' '}
                  <span className="text-marca-principal">cueva de murciélagos</span>
                  {' '}a tu espacio.
                </p>
                <p className="text-texto-secundario leading-relaxed mb-4">
                  Visitarlas en persona sería inviable: el acceso humano daña los hábitats donde nacen. MUMA lleva la cueva a tu espacio para que tu público viva lo que de otro modo destruiría.
                </p>
                <p className="text-texto-secundario leading-relaxed mb-8">
                  Con gafas de realidad virtual, el visitante entra en una cueva habitada por murciélagos y comprende su papel en el ecosistema. Sin pisar la cueva. Sin alterar nada. Con el rigor de quien lleva años documentando ese mundo.
                </p>

                {/* Citas de posicionamiento */}
                <blockquote className="border-l-2 border-marca-principal pl-5 mb-8">
                  <p className="text-texto-principal italic leading-relaxed text-sm">
                    "Llevamos la cueva a las personas, no las personas a la cueva."
                  </p>
                  <cite className="text-xs text-texto-secundario/60 not-italic mt-1 block">
                    MUMA BAT COMPANY
                  </cite>
                </blockquote>

                {/* Badges compactos */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <div className="flex items-center gap-2 bg-fondo-superficie border border-white/8 rounded-xl px-4 py-2.5">
                    <Award size={14} className="text-marca-principal shrink-0" aria-hidden="true" />
                    <span className="text-xs text-texto-secundario">Aval científico SECEMU</span>
                  </div>
                  <div className="flex items-center gap-2 bg-fondo-superficie border border-white/8 rounded-xl px-4 py-2.5">
                    <Truck size={14} className="text-marca-principal shrink-0" aria-hidden="true" />
                    <span className="text-xs text-texto-secundario">Servicio llave en mano</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#demo"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 no-underline"
                  >
                    Pedir demostración en tu espacio
                  </a>
                  <a
                    href="mailto:info@murcielagosmalaga.com"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-white/20 text-texto-principal hover:bg-white/8 hover:border-white/35 transition-all duration-200 no-underline"
                  >
                    Escribir al equipo <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* ── Stack de imágenes ── */}
              <div className="flex flex-col gap-3 lg:gap-4">
                {/* Imagen principal */}
                <div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-fondo-superficie border border-white/5"
                >
                  <img
                    src="/images/Image_VRglases.webp"
                    alt="Persona experimentando MuMa VR² Cave Experience con gafas de realidad virtual"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(11,17,23,0.4) 0%, transparent 50%)' }}
                    aria-hidden="true"
                  />
                </div>

                {/* Imagen secundaria de apoyo */}
                <div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.14 }}
                  className="relative rounded-xl overflow-hidden aspect-[16/8] bg-fondo-superficie border border-white/5"
                >
                  <img
                    src="/images/VR-Malaga.jpg"
                    alt="Murciélagos Málaga — experiencia de realidad virtual en entorno natural"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    style={{ filter: 'brightness(1.15) contrast(1.05) saturate(1.1)' }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(11,17,23,0.15) 0%, transparent 60%)' }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            {/* ── 4 pilares del servicio — fila compacta ── */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {PILARES.map(({ Icono, titulo, desc }, i) => (
                <div
                  key={titulo}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{
                    oculto:  { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.07 } },
                  }}
                  className="bg-fondo-superficie rounded-xl p-5 border border-white/5"
                >
                  <Icono size={22} className="text-marca-principal mb-3" aria-hidden="true" />
                  <p className="text-sm font-bold text-texto-titulo mb-1">{titulo}</p>
                  <p className="text-xs text-texto-secundario leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Franja de financiación europea */}
            <div
              initial="oculto" whileInView="visible" viewport={{ once: true }}
              variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
              className="mt-16 rounded-2xl bg-white/5 border border-white/10 px-8 py-10"
            >
              <p className="text-xs font-bold tracking-[0.2em] text-marca-principal uppercase mb-8 text-center">
                Proyecto financiado por
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {[
                  { src: '/images/europa.png', alt: 'Unión Europea — Fondo Europeo de Desarrollo Regional' },
                  { src: '/images/polo-contenido-digital.webp', alt: 'Polo de Contenidos Digitales de Málaga' },
                  { src: '/images/Camara-malaga-150x150.jpg', alt: 'Cámara de Comercio de Málaga' },
                  { src: '/images/centro-europeo-empresas.webp', alt: 'Centro Europeo de Empresas e Innovación' },
                ].map((logo, i) => (
                  <div key={i} className="bg-white rounded-xl px-5 py-3 flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-12 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-texto-secundario/50 mt-8 max-w-xl mx-auto leading-relaxed">
                La Batcave Experience es el resultado comercial del proyecto europeo ST3ER, financiado por el programa SMP COSME de la Unión Europea e impulsado por la red La Brújula XR.
              </p>
            </div>

          </div>

          {/* Separador visual hacia el ecosistema */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: 'linear-gradient(to right, transparent 0%, rgba(31,225,167,0.2) 30%, rgba(31,225,167,0.2) 70%, transparent 100%)' }}
            aria-hidden="true"
          />
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            3. ECOSISTEMA — Grid de 4 módulos complementarios (2×2)
            ══════════════════════════════════════════════════════════════════ */}
        <section
          className="relative py-20 px-6 overflow-hidden"
          aria-labelledby="ecosistema-titulo"
        >
          {/* Fondo diferenciado */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(160deg, #101923 0%, #0f1d28 40%, #101923 100%)',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 35% at 50% 20%, rgba(31,225,167,0.04) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-5xl mx-auto">

            {/* Cabecera de sección */}
            <div
              initial="oculto" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-14"
            >
              <p className="text-[10px] font-bold tracking-[0.25em] text-marca-principal uppercase mb-4">
                El ecosistema digital completo
              </p>
              <h2
                id="ecosistema-titulo"
                className="text-2xl sm:text-3xl font-bold text-texto-titulo mb-5 leading-snug"
              >
                La experiencia presencial es el centro.{' '}
                <span className="text-marca-principal">Estos cuatro módulos la amplían.</span>
              </h2>
              <p className="text-texto-secundario leading-relaxed max-w-xl mx-auto">
                Contenido interactivo, educativo y gamificado que extiende
                el impacto de MuMa más allá del evento.
              </p>
            </div>

            {/* Grid 2×2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {MODULOS.map((modulo, i) => (
                <CardModulo key={modulo.titulo} {...modulo} index={i} />
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            4. FRANJA DE LOGOS DE ALIANZAS — carrusel horizontal infinito
            ══════════════════════════════════════════════════════════════════ */}
        <section
          className="bg-fondo-base py-16 border-t border-white/5 overflow-hidden"
          aria-label="Alianzas y avaladores de MUMA"
        >
          {/* Keyframe inyectado en el JSX — sin dependencia de archivo CSS externo */}
          <style>{`
            @keyframes scroll-logos {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>

          {/* Título de sección */}
          <p
            initial="oculto"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-[10px] font-bold tracking-[0.2em] text-texto-secundario/60 uppercase text-center mb-12 px-6"
          >
            Avalan y colaboran con MuMa
          </p>

          {/* Contenedor exterior: máscara lateral + interacción ratón */}
          <div
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              cursor: 'grab',
            }}
            onMouseEnter={(e) => {
              const track = e.currentTarget.querySelector('[data-carousel-track]')
              if (track) track.style.animationPlayState = 'paused'
            }}
            onMouseLeave={(e) => {
              const track = e.currentTarget.querySelector('[data-carousel-track]')
              if (track) {
                setTimeout(() => {
                  if (track) track.style.animationPlayState = 'running'
                }, 1500)
              }
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.cursor = 'grabbing'
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.cursor = 'grab'
            }}
          >
            {/* Track animado: contiene los logos × 2 para el loop sin salto */}
            <div
              data-carousel-track
              style={{
                display: 'flex',
                alignItems: 'center',
                width: 'max-content',
                animation: 'scroll-logos 45s linear infinite',
                paddingTop: '1.5rem',
                paddingBottom: '1.5rem',
              }}
            >
              {[...ALIANZAS, ...ALIANZAS].map((alianza, i) => (
                <img
                  key={`${alianza.nombre}-${i}`}
                  src={alianza.logo}
                  alt={alianza.nombre}
                  title={alianza.nombre}
                  className="h-16 w-auto max-w-[160px] object-contain mx-14 opacity-80 hover:opacity-100 transition-opacity duration-200"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            5. CTA DE CONVERSIÓN + FORMULARIO
            ══════════════════════════════════════════════════════════════════ */}
        <section
          id="demo"
          className="relative py-24 px-6 overflow-hidden"
          aria-labelledby="cta-titulo"
        >
          {/* Fondo */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #1b2836 0%, #101923 50%, #0b1117 100%)',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(31,225,167,0.04) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">

            {/* Cabecera del CTA */}
            <div
              initial="oculto" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-12"
            >
              <p className="text-[10px] font-bold tracking-[0.22em] text-marca-principal uppercase mb-4">
                Con MuMa, la realidad virtual no sustituye la naturaleza
              </p>
              <h2
                id="cta-titulo"
                className="font-bold leading-tight tracking-tight text-texto-titulo mb-4"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                La protege.
              </h2>
              <p className="text-texto-secundario leading-relaxed max-w-md mx-auto mb-8">
                Cada experiencia impulsa investigación, divulgación
                y acciones de conservación. Pide una demostración en tu espacio.
              </p>
              {/* Garantías breves */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-xs text-texto-secundario/70">
                {[
                  'Sin compromiso de contratación',
                  'MUMA lleva todo el equipo',
                  'Respuesta en 48 h',
                ].map((item) => (
                  <span key={item} className="flex items-center justify-center gap-1.5">
                    <CheckCircle size={12} className="text-marca-principal shrink-0" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Formulario */}
            {enviado ? (
              <div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-fondo-superficie rounded-2xl p-10 border border-marca-principal/20 text-center"
              >
                <CheckCircle size={40} className="text-marca-principal mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold text-texto-titulo mb-2">Solicitud recibida</h3>
                <p className="text-texto-secundario text-sm leading-relaxed">
                  Nos pondremos en contacto contigo en menos de 48 horas
                  para coordinar la demostración.
                </p>
              </div>
            ) : (
              <form
                initial="oculto" whileInView="visible" viewport={{ once: true }}
                variants={{
                  oculto:  { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
                }}
                onSubmit={handleSubmit}
                className="bg-fondo-superficie rounded-2xl p-8 border border-white/5 space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Campo
                    id="nombre" name="nombre" label="Nombre"
                    placeholder="Tu nombre" required autoComplete="name"
                  />
                  <Campo
                    id="email" name="email" type="email" label="Correo electrónico"
                    placeholder="tu@email.com" required autoComplete="email"
                  />
                </div>
                <Campo
                  id="organizacion" name="organizacion" label="Organización"
                  placeholder="Museo, ayuntamiento, hotel…" required
                />

                {/* Select — tipo de espacio */}
                <div>
                  <label
                    htmlFor="tipo-espacio"
                    className="block text-[10px] font-bold text-texto-secundario uppercase tracking-[0.12em] mb-1.5"
                  >
                    Tipo de espacio
                  </label>
                  <select
                    id="tipo-espacio" name="tipo_espacio" required
                    defaultValue=""
                    className="w-full bg-fondo-base border border-white/10 rounded-xl px-4 py-3 text-sm text-texto-principal focus:outline-none focus:border-marca-principal/50 transition-colors duration-200 appearance-none"
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="museo">Museo o centro de interpretación</option>
                    <option value="ayuntamiento">Ayuntamiento o diputación</option>
                    <option value="hotel">Hotel o espacio turístico</option>
                    <option value="educativo">Centro educativo</option>
                    <option value="evento">Evento o feria</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Campo
                    id="participantes" name="participantes" label="Participantes estimados"
                    placeholder="Ej: 100–200 personas"
                  />
                  <Campo
                    id="fecha" name="fecha" label="Fecha tentativa"
                    placeholder="Ej: junio 2026"
                  />
                </div>

                <input
                  type="hidden" name="_subject"
                  value="Solicitud demostración VR — MuMa VR² Cave Experience"
                />

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200"
                >
                  Pedir demostración en tu espacio
                </button>

                <p className="text-xs text-center text-texto-secundario/50">
                  O escríbenos a{' '}
                  <a
                    href="mailto:info@murcielagosmalaga.com"
                    className="text-marca-principal hover:opacity-80 transition-opacity no-underline"
                  >
                    info@murcielagosmalaga.com
                  </a>
                  {' '}o por{' '}
                  <a
                    href="https://wa.me/34664213450"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-marca-principal hover:opacity-80 transition-opacity no-underline"
                  >
                    WhatsApp
                  </a>
                </p>
              </form>
            )}

            {/* Link de salida */}
            <p
              initial="oculto" whileInView="visible" viewport={{ once: true }}
              variants={fadeIn}
              className="text-center text-sm text-texto-secundario/60 mt-8"
            >
              ¿Buscas otro servicio?{' '}
              <Link
                to="/#servicios"
                className="text-marca-principal hover:opacity-80 transition-opacity duration-200 no-underline"
              >
                Ver todos los servicios
              </Link>
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
