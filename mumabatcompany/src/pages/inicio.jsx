// Página de inicio — home completa de MUMA BAT COMPANY
import Footer from '../components/footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Moon, MonitorPlay, TreePine, BookOpen, MapPin, Check, CheckCircle2 } from 'lucide-react'
import Hero from '../components/hero'
import Calculadora from '../components/calculadora'

const servicios = [
  { id: 'bat-night', Icono: Moon, titulo: 'Bat Night', descripcion: 'Actividades nocturnas guiadas con detección de ultrasonidos, diseñadas para grupos, festivales, centros de naturaleza y ayuntamientos.', etiqueta: 'Experiencias', enlace: '/servicios/bat-night' },
  { id: 'museo-virtual', Icono: MonitorPlay, titulo: 'Museo Virtual y Realidad Virtual', descripcion: 'Exposiciones digitales e inmersivas sobre murciélagos. Contenidos para museos, centros de interpretación y espacios educativos.', etiqueta: 'Inmersivo', enlace: '/servicios/realidad-virtual' },
  { id: 'refugios', Icono: TreePine, titulo: 'Refugios para murciélagos', descripcion: 'Diseño, fabricación e instalación de refugios. Solución basada en la naturaleza para control de plagas y restauración de poblaciones.', etiqueta: 'Infraestructura', enlace: '/servicios/refugios' },
  { id: 'educacion', Icono: BookOpen, titulo: 'Educación ambiental y consultoría', descripcion: 'Talleres, formación y consultoría técnica en divulgación científica, soluciones basadas en la naturaleza y gestión de fauna.', etiqueta: 'Formación · Consultoría', enlace: '/servicios/educacion-ambiental' },
]

const pilares = [
  { titulo: 'Impacto real y medible', descripcion: 'Cada proyecto genera datos verificables. No vendemos experiencias vacías: diseñamos intervenciones con resultados cuantificables en biodiversidad y control de plagas.' },
  { titulo: 'Tecnología aplicada', descripcion: 'Detección de ultrasonidos, realidad virtual, modelos 3D y monitoreo acústico. Herramientas de alto nivel al servicio de la conservación y la divulgación.' },
  { titulo: 'Rigor científico', descripcion: 'Respaldados por metodología científica publicada y colaboraciones con investigadores y gestores de espacios naturales.' },
]

const schemaOrg = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MUMA BAT COMPANY",
  "url": "https://mumabatcompany.com",
  "description": "Empresa especializada en servicios con murciélagos: museo virtual, refugios, educación ambiental y consultoría.",
  "areaServed": "ES",
  "serviceType": ["Museo Virtual", "Refugios para murciélagos", "Educación ambiental", "Bat Night", "Consultoría ambiental"]
})

const varianteSeccion = { oculto: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }

function SeccionServicios() {
  return (
    <section id="servicios" className="bg-fondo-base py-20 px-8 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Lo que puedes contratar</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">Servicios</h2>
          <p className="text-texto-secundario max-w-xl mx-auto">Soluciones concretas para instituciones, ayuntamientos, museos, centros educativos y entidades públicas o privadas.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicios.map((servicio, i) => (
            <motion.article key={servicio.id} initial="oculto" whileInView="visible" viewport={{ once: true }} variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } } }} className="bg-fondo-superficie rounded-2xl p-6 border border-white/5 hover:border-marca-principal/25 transition-colors duration-300 flex flex-col">
              <servicio.Icono size={28} className="text-marca-principal mb-4" aria-hidden="true" />
              <span className="text-xs font-semibold text-marca-principal uppercase tracking-wider mb-2">{servicio.etiqueta}</span>
              <h3 className="text-base font-bold text-texto-titulo mb-3 leading-snug">{servicio.titulo}</h3>
              <p className="text-sm text-texto-secundario leading-relaxed flex-grow">{servicio.descripcion}</p>
              {servicio.enlace.startsWith('/') ? (
                <Link to={servicio.enlace} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-marca-principal hover:text-marca-principal-hover transition-colors duration-200 no-underline">
                  Ver servicio <span aria-hidden="true">→</span>
                </Link>
              ) : (
                <a href={servicio.enlace} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-marca-principal hover:text-marca-principal-hover transition-colors duration-200 no-underline">
                  Solicitar información <span aria-hidden="true">→</span>
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SeccionPorQueMuma() {
  return (
    <section id="por-que-muma" className="bg-fondo-secundario py-20 px-8 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Criterio de trabajo</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">Por qué MUMA BAT COMPANY</h2>
          <p className="text-texto-secundario max-w-xl mx-auto">No somos una ONG ni una empresa de eventos. Somos especialistas con metodología, datos y resultados.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pilares.map((pilar, i) => (
            <motion.div key={i} initial="oculto" whileInView="visible" viewport={{ once: true }} variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } } }} className="bg-fondo-superficie rounded-2xl p-7 border border-white/5">
              <span className="text-4xl font-bold text-marca-principal/20 leading-none block mb-4">0{i + 1}</span>
              <h3 className="text-lg font-bold text-texto-titulo mb-3">{pilar.titulo}</h3>
              <p className="text-sm text-texto-secundario leading-relaxed">{pilar.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SeccionRedRefugios() {
  return (
    <section id="red-refugios" className="bg-fondo-base py-20 px-8 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Activo estratégico</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-5">Red activa de refugios</h2>
            <p className="text-texto-secundario leading-relaxed mb-6">Contamos con una red creciente de refugios instalados y monitorizados en distintas provincias. Cada instalación genera datos acústicos y de ocupación que refuerzan nuestra capacidad de consultoría.</p>
            <ul className="space-y-3 text-sm text-texto-secundario">
              <li className="flex gap-2 items-start"><Check size={16} className="text-marca-principal mt-0.5 shrink-0" aria-hidden="true" />Monitoreo acústico periódico</li>
              <li className="flex gap-2 items-start"><Check size={16} className="text-marca-principal mt-0.5 shrink-0" aria-hidden="true" />Informes de ocupación y especies detectadas</li>
              <li className="flex gap-2 items-start"><Check size={16} className="text-marca-principal mt-0.5 shrink-0" aria-hidden="true" />Adaptación por hábitat y climatología local</li>
            </ul>
            <a href="#contacto" className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 no-underline">
              Consultar instalación
            </a>
          </div>
          <div className="bg-fondo-superficie rounded-2xl border border-white/5 flex flex-col items-center justify-center h-80 lg:h-96 text-center p-8" aria-label="Mapa de la red de refugios, próximamente">
            <MapPin size={40} className="text-marca-principal/40 mb-4" aria-hidden="true" />
            <p className="text-texto-secundario text-sm">Mapa interactivo de la red de refugios</p>
            <p className="text-xs text-texto-secundario/40 mt-1">Integración Leaflet — próxima iteración</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SeccionContacto() {
  const [estado, setEstado] = useState('idle') // 'idle' | 'enviando' | 'exito' | 'error'
  const [formulario, setFormulario] = useState({ nombre: '', email: '', tipoConsulta: '', mensaje: '' })

  const tiposConsulta = ['Bat Night / actividad nocturna', 'Museo Virtual o Realidad Virtual', 'Refugios para murciélagos', 'Educación ambiental', 'Consultoría técnica', 'Otro']
  const handleCambio = (e) => setFormulario({ ...formulario, [e.target.name]: e.target.value })
  const claseCampo = 'w-full px-4 py-3 rounded-xl text-sm bg-fondo-campo text-texto-oscuro border border-slate-300 focus:border-marca-principal focus:ring-2 focus:ring-marca-principal/20 outline-none transition-colors duration-200'

  const handleEnvio = async (e) => {
    e.preventDefault()
    setEstado('enviando')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Nueva consulta MUMA: ${formulario.tipoConsulta}`,
          from_name: formulario.nombre,
          email: formulario.email,
          tipo_consulta: formulario.tipoConsulta,
          mensaje: formulario.mensaje,
        }),
      })
      const data = await res.json()
      setEstado(data.success ? 'exito' : 'error')
    } catch {
      setEstado('error')
    }
  }

  return (
    <section id="contacto" className="bg-fondo-secundario py-20 px-8 sm:px-12">
      <div className="max-w-2xl mx-auto">
        <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Empieza una conversación</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">Cuéntanos tu proyecto</h2>
          <p className="text-texto-secundario">
            Te respondemos en menos de 24 horas. Si prefieres, escríbenos por{' '}
            <a href="https://wa.me/34664213450" target="_blank" rel="noopener noreferrer" className="text-estado-exito hover:opacity-80 font-medium no-underline">WhatsApp</a>.
          </p>
        </motion.div>
        <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={{ oculto: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }} className="bg-fondo-formulario rounded-2xl p-8 shadow-lg">
          {estado === 'exito' ? (
            <div className="text-center py-8">
              <CheckCircle2 size={48} className="text-estado-exito mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-texto-oscuro mb-2">Mensaje recibido</h3>
              <p className="text-texto-suave-oscuro">Te contactaremos en menos de 24 horas.</p>
            </div>
          ) : (
            <form onSubmit={handleEnvio} className="space-y-5" noValidate>
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-texto-oscuro mb-1.5">Nombre o entidad <span className="text-estado-error">*</span></label>
                <input id="nombre" name="nombre" type="text" required value={formulario.nombre} onChange={handleCambio} placeholder="Tu nombre o el nombre de tu organización" className={claseCampo} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-texto-oscuro mb-1.5">Correo electrónico <span className="text-estado-error">*</span></label>
                <input id="email" name="email" type="email" required value={formulario.email} onChange={handleCambio} placeholder="correo@tuorganizacion.es" className={claseCampo} />
              </div>
              <div>
                <label htmlFor="tipoConsulta" className="block text-sm font-semibold text-texto-oscuro mb-1.5">¿En qué estás interesado? <span className="text-estado-error">*</span></label>
                <select id="tipoConsulta" name="tipoConsulta" required value={formulario.tipoConsulta} onChange={handleCambio} className={claseCampo + ' cursor-pointer'}>
                  <option value="" disabled>Selecciona un servicio</option>
                  {tiposConsulta.map((tipo) => <option key={tipo} value={tipo}>{tipo}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-texto-oscuro mb-1.5">Cuéntanos más</label>
                <textarea id="mensaje" name="mensaje" rows={4} value={formulario.mensaje} onChange={handleCambio} placeholder="¿Qué necesitas? ¿Para cuántas personas? ¿Tienes fechas en mente?" className={claseCampo + ' resize-none'} />
              </div>
              {estado === 'error' && (
                <p className="text-sm text-estado-error text-center">
                  No se pudo enviar el mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.
                </p>
              )}
              <button
                type="submit"
                disabled={estado === 'enviando'}
                className="w-full py-3.5 rounded-xl text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {estado === 'enviando' ? 'Enviando…' : 'Enviar consulta'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}


export default function Inicio() {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>MUMA BAT COMPANY | Servicios con murciélagos</title>
        <meta name="description" content="Museo virtual, refugios para murciélagos, educación ambiental y consultoría. Para ayuntamientos, museos y centros educativos en España." />
        <meta property="og:title" content="MUMA BAT COMPANY | Servicios con murciélagos" />
        <meta property="og:description" content="Museo virtual, refugios para murciélagos, educación ambiental y consultoría. Para ayuntamientos, museos y centros educativos en España." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mumabatcompany.com/" />
        <link rel="canonical" href="https://mumabatcompany.com/" />
        <link rel="alternate" hreflang="es-ES" href="https://mumabatcompany.com/" />
        <link rel="alternate" hreflang="en" href="https://mumabatcompany.com/en/" />
        <link rel="alternate" hreflang="de-DE" href="https://mumabatcompany.com/de/" />
        <link rel="alternate" hreflang="x-default" href="https://mumabatcompany.com/" />
        <script type="application/ld+json">{schemaOrg}</script>
      </Helmet>
      <main>
      <Hero />
      <SeccionServicios />
      <SeccionPorQueMuma />
      <Calculadora />
      <SeccionRedRefugios />
      <SeccionContacto />
      <Footer />
      </main>
    </>
  )
}
