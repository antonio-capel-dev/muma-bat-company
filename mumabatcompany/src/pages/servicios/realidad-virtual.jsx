// Página de servicio — Museo Virtual y Realidad Virtual
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MonitorPlay, Headset, Box, Users, Check, ArrowRight } from 'lucide-react'

const schemaOrg = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Museo Virtual y Realidad Virtual para museos e instituciones",
  "provider": {
    "@type": "Organization",
    "name": "MUMA BAT COMPANY",
    "url": "https://mumabatcompany.com"
  },
  "description": "Exposiciones digitales e inmersivas sobre murciélagos para museos, centros de interpretación y espacios educativos. Realidad virtual, modelos 3D y visitas virtuales.",
  "areaServed": "ES",
  "serviceType": "Museo Virtual y Realidad Virtual"
})

const varianteSeccion = {
  oculto: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

const modalidades = [
  {
    Icono: MonitorPlay,
    titulo: 'Visita virtual 360°',
    descripcion: 'Recorridos inmersivos por hábitats de murciélagos accesibles desde cualquier dispositivo. Sin instalación ni hardware especial.',
    publico: 'Museos · Centros de interpretación · Web institucional',
  },
  {
    Icono: Headset,
    titulo: 'Experiencia en Realidad Virtual',
    descripcion: 'Sesiones presenciales con gafas VR. El visitante entra en una cueva, observa colonias, detecta ultrasonidos. Impacto máximo en exposiciones y ferias.',
    publico: 'Museos de ciencia · Espacios naturales · Ferias y eventos',
  },
  {
    Icono: Box,
    titulo: 'Modelos 3D interactivos',
    descripcion: 'Anatomía, especies y comportamiento en modelos tridimensionales explorables. Integración en web, tablets o pantallas táctiles.',
    publico: 'Centros educativos · Exposiciones itinerantes · Aulas digitales',
  },
  {
    Icono: Users,
    titulo: 'Exposición digital llave en mano',
    descripcion: 'Diseño, producción e instalación de la exposición completa. Desde el guión científico hasta la pantalla. Incluye mantenimiento y actualización de contenidos.',
    publico: 'Ayuntamientos · Diputaciones · Museos de historia natural',
  },
]

const paraQuien = [
  { perfil: 'Museos y centros de interpretación', necesidad: 'Renovar exposiciones con tecnología inmersiva sin obra ni inversión en infraestructura permanente.' },
  { perfil: 'Ayuntamientos y espacios naturales', necesidad: 'Divulgar el patrimonio natural local de forma accesible, atractiva y con respaldo científico.' },
  { perfil: 'Centros educativos e institutos', necesidad: 'Complementar el currículo de Ciencias Naturales con experiencias que no se olvidan.' },
  { perfil: 'Paradores, hoteles con naturaleza y campings', necesidad: 'Ofrecer una experiencia diferenciadora a huéspedes y visitantes con alto valor ambiental.' },
]

const diferenciadores = [
  'Contenido científico real: especies presentes en España y Europa, comportamientos verificados, datos de conservación actualizados.',
  'Producción propia: no compramos recursos genéricos. Diseñamos y producimos cada exposición con materiales originales de MUMA.',
  'Integrable con el resto de servicios: el museo virtual puede complementarse con una Bat Night, refugios o formación en el mismo espacio.',
  'Avales institucionales: SECEMU, EUROBATS y REV. El rigor científico es parte del producto.',
]

export default function RealidadVirtual() {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Museo Virtual y Realidad Virtual sobre murciélagos | MUMA BAT COMPANY</title>
        <meta name="description" content="Exposiciones inmersivas sobre murciélagos para museos, centros de interpretación y espacios educativos. Visitas virtuales 360°, realidad virtual y modelos 3D con rigor científico." />
        <meta property="og:title" content="Museo Virtual y Realidad Virtual | MUMA BAT COMPANY" />
        <meta property="og:description" content="Exposiciones inmersivas sobre murciélagos para museos, centros de interpretación y espacios educativos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mumabatcompany.com/servicios/realidad-virtual" />
        <link rel="canonical" href="https://mumabatcompany.com/servicios/realidad-virtual" />
        <script type="application/ld+json">{schemaOrg}</script>
      </Helmet>

      <main>

        {/* ── HERO ── */}
        <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-28 pb-16 bg-fondo-base overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(31,225,167,0.07) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-5"
            >
              Servicio · Inmersivo
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-texto-titulo mb-6"
            >
              Museo Virtual y{' '}
              <span className="text-marca-principal">Realidad Virtual</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-texto-secundario max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Exposiciones digitales e inmersivas sobre murciélagos. Para museos, centros de interpretación, espacios naturales y centros educativos que quieren ofrecer una experiencia que no se olvida.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 no-underline"
              >
                Solicitar propuesta
              </a>
              <a
                href="#modalidades"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-white/15 text-texto-principal hover:bg-fondo-superficie hover:border-white/25 transition-all duration-200 no-underline"
              >
                Ver modalidades <ArrowRight size={15} aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── PARA QUIÉN ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Diseñado para</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">¿Tu organización necesita esto?</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">Trabajamos con instituciones que quieren integrar tecnología inmersiva sin renunciar al rigor científico.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {paraQuien.map((item, i) => (
                <motion.div
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } } }}
                  className="bg-fondo-superficie rounded-2xl p-7 border border-white/5"
                >
                  <p className="text-sm font-bold text-marca-principal mb-2">{item.perfil}</p>
                  <p className="text-sm text-texto-secundario leading-relaxed">{item.necesidad}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MODALIDADES ── */}
        <section id="modalidades" className="bg-fondo-base py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Formatos disponibles</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">Modalidades del servicio</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">Cada proyecto es diferente. Adaptamos el formato al espacio, al presupuesto y al público.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {modalidades.map((modalidad, i) => (
                <motion.article
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } } }}
                  className="bg-fondo-superficie rounded-2xl p-6 border border-white/5 hover:border-marca-principal/25 transition-colors duration-300 flex flex-col"
                >
                  <modalidad.Icono size={28} className="text-marca-principal mb-4" aria-hidden="true" />
                  <h3 className="text-base font-bold text-texto-titulo mb-3 leading-snug">{modalidad.titulo}</h3>
                  <p className="text-sm text-texto-secundario leading-relaxed flex-grow">{modalidad.descripcion}</p>
                  <p className="mt-4 text-xs text-marca-principal/70 leading-relaxed">{modalidad.publico}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── POR QUÉ MUMA ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Lo que nos diferencia</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">No es tecnología por tecnología</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">La realidad virtual es la herramienta. El objetivo es que el visitante salga sabiendo más sobre murciélagos y quiera protegerlos.</p>
            </motion.div>
            <div className="space-y-4">
              {diferenciadores.map((punto, i) => (
                <motion.div
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45, delay: i * 0.07 } } }}
                  className="flex gap-3 items-start bg-fondo-superficie rounded-xl p-5 border border-white/5"
                >
                  <Check size={18} className="text-marca-principal mt-0.5 shrink-0" aria-hidden="true" />
                  <p className="text-sm text-texto-secundario leading-relaxed">{punto}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA / CONTACTO ── */}
        <section id="contacto" className="bg-fondo-base py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}>
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-4">Siguiente paso</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-5">¿Tienes un espacio en mente?</h2>
              <p className="text-texto-secundario leading-relaxed mb-8">
                Cuéntanos el tipo de espacio, el público y el presupuesto aproximado. En 24 horas te enviamos una propuesta adaptada.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:info@murcielagosmalaga.com"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 no-underline"
                >
                  Escribir por email
                </a>
                <a
                  href="https://wa.me/34664213450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-white/15 text-texto-principal hover:bg-fondo-superficie hover:border-white/25 transition-all duration-200 no-underline"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-estado-exito" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
              <p className="mt-8 text-sm text-texto-secundario/60">
                ¿Buscas otro servicio?{' '}
                <Link to="/#servicios" className="text-marca-principal hover:opacity-80 transition-opacity duration-200 no-underline">
                  Ver todos los servicios
                </Link>
              </p>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  )
}
