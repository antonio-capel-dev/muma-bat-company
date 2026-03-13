// Página de servicio — Educación ambiental y consultoría
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Headset, MessageCircle, Users, BookOpen, School, Building2, Landmark, Hotel, Leaf, Check, ArrowRight } from 'lucide-react'

const schemaOrg = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Educación ambiental y consultoría sobre murciélagos",
  "provider": {
    "@type": "Organization",
    "name": "MUMA BAT COMPANY",
    "url": "https://mumabatcompany.com"
  },
  "description": "Talleres, charlas interactivas, visitas virtuales y materiales educativos sobre murciélagos adaptados a centros educativos, museos, administraciones y empresas.",
  "areaServed": "ES",
  "serviceType": "Educación ambiental y consultoría"
})

const varianteSeccion = {
  oculto: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

const stats = [
  { valor: '+700', etiqueta: 'participantes en 2025' },
  { valor: 'RV + Charlas + Talleres', etiqueta: 'formatos combinados' },
  { valor: 'Adaptado', etiqueta: 'a cada grupo y edad' },
  { valor: '100%', etiqueta: 'inmersivo y participativo' },
]

const queOfrecemos = [
  {
    Icono: Headset,
    titulo: 'Visitas virtuales a cuevas',
    descripcion: 'Llevamos a los participantes al interior de una cueva mediante realidad virtual. Observan colonias reales, escuchan ultrasonidos y conocen la vida nocturna de los murciélagos sin salir del aula.',
    publico: 'Colegios · Institutos · Museos',
  },
  {
    Icono: MessageCircle,
    titulo: 'Charlas interactivas',
    descripcion: 'Sesiones divulgativas con contenido científico actualizado. Desmontamos mitos, explicamos el papel ecológico de los murciélagos y respondemos preguntas en tiempo real.',
    publico: 'AMPAs · Ayuntamientos · Centros cívicos',
  },
  {
    Icono: Users,
    titulo: 'Dinámicas grupales',
    descripcion: 'Actividades participativas diseñadas para reforzar el aprendizaje: juegos de roles, detección de ultrasonidos en vivo, análisis de muestras y debates guiados.',
    publico: 'Grupos escolares · Familias · Colectivos medioambientales',
  },
  {
    Icono: BookOpen,
    titulo: 'Materiales adaptados al currículo',
    descripcion: 'Recursos didácticos alineados con el currículo oficial de Ciencias Naturales y Biología. Disponibles en formato digital e impreso para docentes y alumnado.',
    publico: 'Docentes · Centros educativos · Administraciones',
  },
]

const paraQuien = [
  { Icono: School, perfil: 'Centros educativos y AMPAs', necesidad: 'Enriquecer el programa escolar con experiencias científicas memorables, alineadas con el currículo y adaptadas a cada etapa.' },
  { Icono: Building2, perfil: 'Administraciones e instituciones', necesidad: 'Desarrollar programas de educación ambiental en municipios, parques naturales y espacios protegidos con respaldo científico.' },
  { Icono: Landmark, perfil: 'Museos', necesidad: 'Complementar exposiciones permanentes con talleres y experiencias inmersivas que multiplican el impacto educativo de la visita.' },
  { Icono: Hotel, perfil: 'Hoteles y campings', necesidad: 'Ofrecer actividades educativas y de naturaleza como valor añadido para familias y viajeros comprometidos con el entorno.' },
  { Icono: Leaf, perfil: 'ONGs y entidades ambientales', necesidad: 'Ampliar el alcance de sus campañas de concienciación con contenidos inmersivos y herramientas de divulgación científica.' },
]

const porQueElegirnos = [
  'Conviertes la educación en experiencia real: los participantes no escuchan sobre la naturaleza, la viven.',
  'Tecnología aliada del aprendizaje: la realidad virtual y los detectores de ultrasonidos hacen que el conocimiento sea tangible y duradero.',
  'Fomentas valores ambientales desde la emoción: quien comprende los murciélagos quiere protegerlos.',
  'Enriqueces proyectos escolares y municipales con actividades que cumplen objetivos de ODS y educación para el desarrollo sostenible.',
]

const imagenes = [
  { alt: 'Alumnos con gafas de realidad virtual en taller educativo de MUMA' },
  { alt: 'Charla interactiva sobre murciélagos en centro escolar' },
  { alt: 'Dinámica grupal de detección de ultrasonidos con detector acústico' },
  { alt: 'Materiales didácticos de educación ambiental MUMA para docentes' },
]

export default function EducacionAmbiental() {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Educación ambiental y consultoría sobre murciélagos | MUMA BAT COMPANY</title>
        <meta name="description" content="Talleres, charlas interactivas, visitas virtuales y materiales educativos sobre murciélagos. Adaptados a colegios, museos, administraciones y empresas. +700 participantes en 2025." />
        <meta property="og:title" content="Educación ambiental y consultoría | MUMA BAT COMPANY" />
        <meta property="og:description" content="Talleres, charlas interactivas y visitas virtuales sobre murciélagos adaptados a centros educativos, museos y administraciones." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mumabatcompany.com/servicios/educacion-ambiental" />
        <link rel="canonical" href="https://mumabatcompany.com/servicios/educacion-ambiental" />
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
              Servicio · Formación y consultoría
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-texto-titulo mb-6"
            >
              Educación ambiental{' '}
              <span className="text-marca-principal">y consultoría</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-texto-secundario max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Tecnología que conecta con la naturaleza. Charlas, talleres, visitas virtuales y materiales educativos diseñados para que el conocimiento sobre los murciélagos sea una experiencia que no se olvida.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 no-underline"
              >
                Reserva tu experiencia
              </a>
              <a
                href="#que-ofrecemos"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-white/15 text-texto-principal hover:bg-fondo-superficie hover:border-white/25 transition-all duration-200 no-underline"
              >
                Ver qué ofrecemos <ArrowRight size={15} aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-fondo-secundario py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial="oculto" whileInView="visible" viewport={{ once: true }}
                variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } } }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl font-bold text-marca-principal mb-1 leading-tight">{stat.valor}</p>
                <p className="text-xs text-texto-secundario leading-snug">{stat.etiqueta}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── QUÉ OFRECEMOS ── */}
        <section id="que-ofrecemos" className="bg-fondo-base py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Formatos disponibles</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">¿Qué ofrecemos?</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">Cada sesión se adapta al grupo, la edad y los objetivos. Combinamos formatos para maximizar el impacto educativo.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {queOfrecemos.map((item, i) => (
                <motion.article
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } } }}
                  className="bg-fondo-superficie rounded-2xl p-6 border border-white/5 hover:border-marca-principal/25 transition-colors duration-300 flex flex-col"
                >
                  <item.Icono size={28} className="text-marca-principal mb-4" aria-hidden="true" />
                  <h3 className="text-base font-bold text-texto-titulo mb-3 leading-snug">{item.titulo}</h3>
                  <p className="text-sm text-texto-secundario leading-relaxed flex-grow">{item.descripcion}</p>
                  <p className="mt-4 text-xs text-marca-principal/70 leading-relaxed">{item.publico}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARA QUIÉN ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Diseñado para</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">¿Para quién es este servicio?</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">Trabajamos con organizaciones que quieren hacer de la educación ambiental una experiencia transformadora.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {paraQuien.map((item, i) => (
                <motion.div
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } } }}
                  className="bg-fondo-superficie rounded-2xl p-7 border border-white/5 flex flex-col gap-3"
                >
                  <item.Icono size={24} className="text-marca-principal shrink-0" aria-hidden="true" />
                  <p className="text-sm font-bold text-marca-principal leading-snug">{item.perfil}</p>
                  <p className="text-sm text-texto-secundario leading-relaxed">{item.necesidad}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── POR QUÉ MUMA ── */}
        <section className="bg-fondo-base py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Lo que nos diferencia</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">¿Por qué elegir MUMA?</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">No impartimos formación genérica. Cada programa está diseñado para conectar emocionalmente con la biodiversidad.</p>
            </motion.div>
            <div className="space-y-4">
              {porQueElegirnos.map((punto, i) => (
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

        {/* ── GALERÍA ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Momentos reales</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">Galería</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">Imágenes de nuestros programas educativos con escuelas, museos e instituciones.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {imagenes.map((img, i) => (
                <motion.div
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } } }}
                  className="aspect-square rounded-2xl bg-fondo-superficie border border-white/5 flex items-center justify-center overflow-hidden"
                  aria-label={img.alt}
                >
                  <div className="flex flex-col items-center gap-3 p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-marca-principal/10 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-marca-principal/50" aria-hidden="true">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-5-5L5 21" />
                      </svg>
                    </div>
                    <p className="text-xs text-texto-secundario/60 leading-snug">{img.alt}</p>
                  </div>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-5">Reserva tu experiencia</h2>
              <p className="text-texto-secundario leading-relaxed mb-8">
                Cuéntanos el tipo de grupo, la edad y los objetivos del programa. Te enviamos una propuesta personalizada en 24 horas.
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
