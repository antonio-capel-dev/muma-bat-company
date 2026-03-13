// Página de servicio — Bat Nights
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Moon, Users, MapPin, CalendarDays, ArrowRight, Check } from 'lucide-react'

const schemaOrg = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bat Nights — Experiencias nocturnas de conservación",
  "provider": {
    "@type": "Organization",
    "name": "MUMA BAT COMPANY",
    "url": "https://mumabatcompany.com"
  },
  "description": "Actividades nocturnas guiadas con detección de ultrasonidos, realidad virtual y educación ambiental sobre murciélagos. Para ayuntamientos, museos, reservas naturales y espacios culturales.",
  "areaServed": "ES",
  "serviceType": "Bat Night"
})

const varianteSeccion = {
  oculto: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

const casosBatNight = [
  {
    titulo: 'Bat Night Portugal — Grutas da Moeda',
    fecha: '14 septiembre 2025',
    participantes: '+200 visitantes',
    ubicacion: 'Fátima, Portugal',
    descripcion: 'Evento en formato open-stand de 10:00 a 18:00 h en las Grutas da Moeda. Colaboración con el investigador Danilo Guimarães. Actividades de detección de ultrasonidos y divulgación científica sobre quirópteros ibéricos.',
    destacados: ['Formato open-stand 10:00–18:00 h', 'Colaboración científica con Danilo Guimarães', '+200 visitantes en un solo día', 'Primer evento internacional de MUMA'],
    slug: '/servicios/bat-night/portugal-grutas-moeda',
  },
  {
    titulo: 'Bat Night Cueva de Nerja y Parador de Turismo',
    fecha: '26 septiembre 2025 · Nuevas ediciones agosto y octubre 2025',
    participantes: '+50 participantes',
    ubicacion: 'Nerja, Málaga',
    descripcion: 'Experiencia nocturna en colaboración con la Fundación Cueva de Nerja y el Parador de Turismo de Nerja. Se instalaron refugios monitorizados en el entorno. El éxito de la primera edición derivó en nuevas convocatorias en agosto y octubre de 2025.',
    destacados: ['Instalación de refugios monitorizados', 'Colaboración con Fundación Cueva de Nerja', 'Tres ediciones en 2025', 'Integración ecoturismo + conservación'],
    slug: '/servicios/bat-night/cueva-nerja',
  },
  {
    titulo: 'Bat Night Plaza Mayor Málaga',
    fecha: '25 y 26 julio 2025',
    participantes: '200–300 participantes',
    ubicacion: 'Málaga capital',
    descripcion: 'Evento urbano de dos jornadas en Plaza Mayor Málaga. Programa completo con área de realidad virtual, exposición fotográfica sobre murciélagos y talleres infantiles. Una de las experiencias con mayor afluencia de público organizadas por MUMA.',
    destacados: ['Área de realidad virtual inmersiva', 'Exposición fotográfica', 'Talleres infantiles', '2 jornadas · 200–300 participantes'],
    slug: '/servicios/bat-night/plaza-mayor-malaga',
  },
  {
    titulo: 'Bat Night Laguna de Fuente de Piedra',
    fecha: 'Reserva Natural Protegida',
    participantes: 'Público familiar y escolar',
    ubicacion: 'Fuente de Piedra, Málaga',
    descripcion: 'Actividad en una de las reservas naturales más emblemáticas de Andalucía. Programa de educación ambiental sobre el papel de los murciélagos en ecosistemas de humedal, combinado con experiencia VR en entorno natural.',
    destacados: ['Reserva natural protegida', 'Educación ambiental + VR', 'Público familiar y escolar', 'Ecosistema de humedal'],
    slug: '/servicios/bat-night/fuente-de-piedra',
  },
]

const formatosBatNight = [
  {
    Icono: Moon,
    titulo: 'Bat Night estándar',
    descripcion: 'Actividad nocturna guiada con detección de ultrasonidos en tiempo real, charla científica y sesión de preguntas. Ideal para parques naturales, ayuntamientos y centros de naturaleza.',
    publico: 'Espacios naturales · Ayuntamientos · Centros educativos',
  },
  {
    Icono: Users,
    titulo: 'Bat Night con VR',
    descripcion: 'Combinación de actividad al aire libre y experiencia de realidad virtual inmersiva. El participante detecta murciélagos en vivo y luego entra en una cueva virtual. Máximo impacto divulgativo.',
    publico: 'Museos · Ferias científicas · Festivales de naturaleza',
  },
  {
    Icono: MapPin,
    titulo: 'Bat Night en espacios culturales',
    descripcion: 'Adaptación del formato para plazas, patios de museos o recintos urbanos. Incluye exposición fotográfica, zona infantil y módulo de realidad virtual. Formato ferial de larga duración.',
    publico: 'Museos · Centros comerciales · Eventos municipales',
  },
  {
    Icono: CalendarDays,
    titulo: 'Ciclo de Bat Nights',
    descripcion: 'Programa de varias ediciones a lo largo del año, con fechas coordinadas según calendario de quirópteros. Incluye comunicación, materiales y evaluación de impacto.',
    publico: 'Diputaciones · Paradores · Redes de espacios naturales',
  },
]

export default function BatNight() {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Bat Nights — Experiencias nocturnas de conservación | MUMA BAT COMPANY</title>
        <meta name="description" content="Actividades nocturnas guiadas con detección de ultrasonidos, realidad virtual y educación ambiental. Para ayuntamientos, museos y espacios naturales. +700 participantes en 2025." />
        <meta property="og:title" content="Bat Nights | MUMA BAT COMPANY" />
        <meta property="og:description" content="Experiencias nocturnas de conservación con murciélagos. Detección de ultrasonidos, VR y educación ambiental." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mumabatcompany.com/servicios/bat-night" />
        <link rel="canonical" href="https://mumabatcompany.com/servicios/bat-night" />
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
              Servicio · Experiencias
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-texto-titulo mb-6"
            >
              <span className="text-marca-principal">Bat Nights</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-texto-secundario max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Experiencias nocturnas de conservación donde el público detecta murciélagos en tiempo real, comprende su papel ecológico y vive la naturaleza de una forma que no se olvida. Para ayuntamientos, museos, espacios naturales y festivales.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 no-underline"
              >
                Organizar una Bat Night
              </a>
              <a
                href="#bat-nights-realizadas"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-white/15 text-texto-principal hover:bg-fondo-superficie hover:border-white/25 transition-all duration-200 no-underline"
              >
                Ver ediciones realizadas <ArrowRight size={15} aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── BAT NIGHTS REALIZADAS ── */}
        <section id="bat-nights-realizadas" className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Trayectoria</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">Bat Nights realizadas</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">Más de 700 personas han participado en nuestras Bat Nights en 2025, en entornos tan distintos como una gruta portuguesa, una reserva natural andaluza o una plaza urbana.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {casosBatNight.map((caso, i) => (
                <motion.article
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } } }}
                  className="bg-fondo-superficie rounded-2xl p-7 border border-white/5 hover:border-marca-principal/25 transition-colors duration-300 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <Moon size={24} className="text-marca-principal shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-xs font-semibold text-marca-principal/70 text-right leading-snug">{caso.participantes}</span>
                  </div>
                  <h3 className="text-base font-bold text-texto-titulo mb-1 leading-snug">{caso.titulo}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                    <p className="text-xs text-marca-principal/70 flex items-center gap-1">
                      <CalendarDays size={11} aria-hidden="true" />{caso.fecha}
                    </p>
                    <p className="text-xs text-texto-secundario/60 flex items-center gap-1">
                      <MapPin size={11} aria-hidden="true" />{caso.ubicacion}
                    </p>
                  </div>
                  <p className="text-sm text-texto-secundario leading-relaxed mb-5 flex-grow">{caso.descripcion}</p>
                  <ul className="space-y-1.5 mb-5">
                    {caso.destacados.map((punto, j) => (
                      <li key={j} className="flex gap-2 items-start text-xs text-texto-secundario/80">
                        <Check size={13} className="text-marca-principal mt-0.5 shrink-0" aria-hidden="true" />
                        {punto}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={caso.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-marca-principal hover:opacity-75 transition-opacity duration-200 no-underline mt-auto"
                  >
                    Ver detalle del evento <ArrowRight size={12} aria-hidden="true" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORMATOS ── */}
        <section className="bg-fondo-base py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Formatos disponibles</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">Diseñamos la Bat Night a tu medida</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">Adaptamos el formato, la duración y el contenido al tipo de espacio, al público y a los objetivos de tu institución.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {formatosBatNight.map((formato, i) => (
                <motion.article
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } } }}
                  className="bg-fondo-superficie rounded-2xl p-6 border border-white/5 hover:border-marca-principal/25 transition-colors duration-300 flex flex-col"
                >
                  <formato.Icono size={28} className="text-marca-principal mb-4" aria-hidden="true" />
                  <h3 className="text-base font-bold text-texto-titulo mb-3 leading-snug">{formato.titulo}</h3>
                  <p className="text-sm text-texto-secundario leading-relaxed flex-grow">{formato.descripcion}</p>
                  <p className="mt-4 text-xs text-marca-principal/70 leading-relaxed">{formato.publico}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRÓXIMAS BAT NIGHTS ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Agenda 2026</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-5">Próximas Bat Nights</h2>
              <p className="text-texto-secundario max-w-xl mx-auto leading-relaxed">
                Estamos ampliando el calendario para 2026. Si representas a un museo, ayuntamiento, espacio natural, hotel o cualquier institución con vocación divulgativa, podemos diseñar una Bat Night para tu entorno.
              </p>
            </motion.div>
            <motion.div
              initial="oculto" whileInView="visible" viewport={{ once: true }}
              variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }}
              className="bg-fondo-superficie rounded-2xl p-8 border border-marca-principal/20 text-center"
            >
              <Moon size={40} className="text-marca-principal mx-auto mb-5" aria-hidden="true" />
              <h3 className="text-xl font-bold text-texto-titulo mb-3">¿Tu institución quiere organizar una?</h3>
              <p className="text-sm text-texto-secundario leading-relaxed mb-6 max-w-lg mx-auto">
                Cuéntanos el espacio, las fechas aproximadas y el tipo de público. Preparamos una propuesta adaptada en menos de 48 horas.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 no-underline"
                >
                  Solicitar propuesta
                </a>
                <a
                  href="https://wa.me/34664213450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-white/15 text-texto-principal hover:bg-fondo-base hover:border-white/25 transition-all duration-200 no-underline"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-estado-exito" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Consultar por WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA / CONTACTO ── */}
        <section id="contacto" className="bg-fondo-base py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}>
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-4">Siguiente paso</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-5">Llevamos la noche a tu espacio</h2>
              <p className="text-texto-secundario leading-relaxed mb-8">
                Escríbenos con el tipo de espacio, el público previsto y las fechas que tienes en mente. Respondemos en menos de 24 horas con una propuesta a medida.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:info@murcielagosmalaga.com"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 no-underline"
                >
                  info@murcielagosmalaga.com
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
