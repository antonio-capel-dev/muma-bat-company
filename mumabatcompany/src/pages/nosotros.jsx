// Página MUMA — quiénes somos, propósito, pilares, equipo, credibilidad y cierre
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Leaf, Zap, Globe, Users, Camera, Newspaper, ArrowRight } from 'lucide-react'
import Footer from '../components/footer'

const varianteSeccion = {
  oculto: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

// Pilares como fundamentos metodológicos — reemplazan los valores genéricos
const pilares = [
  {
    Icono: Leaf,
    titulo: 'Conservación como criterio',
    texto: 'Cada decisión tecnológica, comercial y comunicativa parte de una pregunta: ¿beneficia al ecosistema? Si no, no lo hacemos. No es posicionamiento: es el filtro que guía cada proyecto.',
  },
  {
    Icono: Zap,
    titulo: 'Tecnología con propósito',
    texto: 'La realidad virtual no es un fin en sí misma. Es la herramienta que permite acercar la naturaleza a las personas sin poner en riesgo lo que se intenta proteger.',
  },
  {
    Icono: Globe,
    titulo: 'Impacto documentado',
    texto: 'Cada refugio instalado, cada participante en una Bat Night y cada licencia VR activada tiene un impacto medido. No estimamos: documentamos con datos reales de ocupación y biodiversidad.',
  },
  {
    Icono: Users,
    titulo: 'Red científica abierta',
    texto: 'Trabajamos con SECEMU, universidades, paradores y ayuntamientos porque la conservación es un esfuerzo colectivo. El conocimiento generado se comparte con las instituciones que lo hacen posible.',
  },
]

// Datos que conectan el valor ecológico de los murciélagos con la propuesta de MUMA
const datosMurciélagos = [
  {
    cifra: '3.000',
    titulo: 'Insectos por noche',
    texto: 'Un solo murciélago elimina entre 1.000 y 3.000 mosquitos, polillas y saltamontes cada noche. Por eso instalamos refugios: cada colonia es un sistema de control de plagas sin coste operativo.',
  },
  {
    cifra: '€1–10M',
    titulo: 'Ahorro estimado en España',
    texto: 'El control natural de plagas que ejercen los murciélagos evita millones en pesticidas al año. MUMA cuantifica ese ahorro para cada cliente mediante nuestra calculadora de impacto.',
  },
  {
    cifra: '700+',
    titulo: 'Personas en experiencia VR',
    texto: 'La experiencia MuMa VR² Cave ha llegado a más de 700 personas en museos, reservas y eventos culturales de España y Portugal durante 2025.',
  },
  {
    cifra: 'En declive',
    titulo: 'Sus poblaciones disminuyen',
    texto: 'La pérdida de hábitats, el uso de pesticidas y la deforestación están reduciendo sus colonias. Aquí es donde MUMA actúa: refugios, monitorización y divulgación con base científica.',
  },
]

const alianzas = [
  { nombre: 'SECEMU', url: 'https://www.secemu.org' },
  { nombre: 'Fundación Cueva de Nerja', url: 'https://www.cuevadenerja.es' },
  { nombre: 'Fundación BioParc', url: 'https://www.bioparcfuengirola.es' },
  { nombre: 'Selwo Aventura', url: 'https://www.selwo.es' },
  { nombre: 'Plaza Mayor Málaga', url: 'https://www.plazamayor.es' },
  { nombre: 'Málaga TechPark', url: 'https://www.ptp.es' },
  { nombre: 'Diputación Provincial de Málaga', url: 'https://www.malaga.es' },
  { nombre: 'Junta de Andalucía', url: 'https://www.juntadeandalucia.es' },
  { nombre: 'CEEI', url: 'https://www.ceei.es' },
  { nombre: 'BIC Euronova', url: 'https://www.biceuronova.com' },
]

const medios = [
  'La Opinión de Málaga',
  'Málaga Hoy',
  'El Español',
  'Andalucía Lab',
  'Hola Andalucía',
  'Canal Málaga',
]

export default function Nosotros() {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>MUMA BAT COMPANY — Quiénes somos</title>
        <meta name="description" content="MUMA BAT COMPANY: empresa especializada en conservación de quirópteros mediante tecnología inmersiva, refugios y consultoría medioambiental. Conoce el equipo, la misión y nuestras alianzas." />
        <meta property="og:title" content="MUMA BAT COMPANY — Quiénes somos" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mumabatcompany.com/nosotros" />
        <link rel="canonical" href="https://mumabatcompany.com/nosotros" />
      </Helmet>

      <main>

        {/* ── SECCIÓN 1: HERO DE MARCA — declaración de posicionamiento ── */}
        <section className="relative bg-fondo-base pt-40 pb-20 px-6 overflow-hidden">

          {/* resplandor decorativo */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(31,225,167,0.07) 0%, transparent 65%)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl mx-auto text-center">

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-5"
            >
              Polo Digital de Málaga
            </motion.p>

            {/* H1 que explica qué es MUMA, no solo suena bien */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-texto-titulo mb-6"
            >
              La empresa que convierte la ciencia de los murciélagos en servicios reales para empresas, instituciones y espacios naturales.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-texto-secundario leading-relaxed max-w-2xl mx-auto"
            >
              No somos divulgadores aficionados ni una ONG. Somos biólogos, tecnólogos y gestores de proyectos que han convertido el conocimiento científico sobre quirópteros en una propuesta comercial seria, contrastada y con impacto medible.
            </motion.p>

          </div>
        </section>

        {/* ── SECCIÓN 2: MISIÓN — propósito real, movida al frente ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}>
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Nuestra misión</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-8">
                Con MUMA, la realidad virtual<br />no sustituye la naturaleza, la protege.
              </h2>
              <div className="space-y-4 text-texto-secundario leading-relaxed text-base sm:text-lg">
                <p>
                  Los murciélagos son los grandes incomprendidos del ecosistema. Un solo individuo elimina hasta 3.000 mosquitos por noche. Son polinizadores, dispersores de semillas y bioindicadores de la salud ambiental. Y están desapareciendo.
                </p>
                <p>
                  En MUMA creemos que el problema no es falta de información: es falta de conexión. Por eso diseñamos experiencias que hacen que las personas <em>sientan</em> el valor de lo que existe fuera de las pantallas. Llevamos la cueva a las personas; no las personas a la cueva.
                </p>
                <p>
                  Desde el Polo Digital de Málaga, operamos en la intersección entre ciencia, tecnología y ecoturismo, con el respaldo de alianzas institucionales que cubren desde la investigación científica hasta la gestión de espacios naturales.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SECCIÓN 3: PILARES — los cuatro fundamentos metodológicos ── */}
        <section className="bg-fondo-base py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Fundamentos</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo">En qué se basa MUMA</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pilares.map(({ Icono, titulo, texto }, i) => (
                <motion.div
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } } }}
                  className="bg-fondo-superficie rounded-2xl p-6 border border-white/5 hover:border-marca-principal/25 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-marca-principal/10 flex items-center justify-center mb-5">
                    <Icono size={20} className="text-marca-principal" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-texto-titulo mb-3 leading-snug">{titulo}</h3>
                  <p className="text-sm text-texto-secundario leading-relaxed">{texto}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECCIÓN 4: EQUIPO — Antonio y Laura ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">El equipo</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo">Las personas detrás de MUMA</h2>
            </motion.div>

            <motion.div
              initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {/* Antonio Moret */}
              <div className="bg-fondo-superficie rounded-2xl overflow-hidden border border-white/5 hover:border-marca-principal/25 transition-colors duration-300">
                <img
                  src="/images/antonio-moret.jpg"
                  alt="Antonio Moret, CEO de MUMA"
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-8">
                  <p className="text-xs font-semibold text-marca-principal uppercase tracking-wider mb-1">CEO</p>
                  <h3 className="text-lg font-bold text-texto-titulo mb-3">Antonio Moret</h3>
                  <p className="text-sm text-texto-secundario leading-relaxed">
                    Especialista en conservación y realidad virtual aplicada al ecoturismo. Más de una década estudiando quirópteros sobre el terreno e impulsando proyectos en la intersección entre ciencia y tecnología.
                  </p>
                </div>
              </div>

              {/* Laura Smit */}
              <div className="bg-fondo-superficie rounded-2xl overflow-hidden border border-white/5 hover:border-marca-principal/25 transition-colors duration-300">
                <div className="w-full h-48 bg-fondo-secundario flex flex-col items-center justify-center gap-2">
                  <Camera size={28} className="text-white/20" aria-hidden="true" />
                  <span className="text-xs text-white/30 font-medium">Próximamente</span>
                </div>
                <div className="p-8">
                  <p className="text-xs font-semibold text-marca-principal uppercase tracking-wider mb-1">Manager</p>
                  <h3 className="text-lg font-bold text-texto-titulo mb-3">Laura Smit</h3>
                  <p className="text-sm text-texto-secundario leading-relaxed">
                    Gestión de proyectos sostenibles e investigación científica. Coordina las alianzas institucionales de MUMA y supervisa la ejecución de los programas de conservación y educación ambiental.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SECCIÓN 5: DATOS DE MURCIÉLAGOS — conectados con la propuesta de MUMA ── */}
        <section className="bg-fondo-base py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Por qué los murciélagos importan</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-3">La base científica de lo que hacemos</h2>
              <p className="text-texto-secundario max-w-xl mx-auto text-sm leading-relaxed">
                No divulgamos por divulgar. Cada dato que usamos justifica un servicio y respalda una decisión de proyecto.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {datosMurciélagos.map((dato, i) => (
                <motion.div
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } } }}
                  className="bg-fondo-superficie rounded-2xl p-6 border border-white/5 hover:border-marca-principal/20 transition-colors duration-300 flex gap-5"
                >
                  <div className="shrink-0">
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
        </section>

        {/* ── SECCIÓN 6: CREDIBILIDAD — alianzas y medios fusionados ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Credibilidad y red</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">Instituciones y medios que respaldan a MUMA</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">
                Trabajamos con organismos científicos, culturales e institucionales comprometidos con la conservación. Y los medios de referencia lo han contado.
              </p>
            </motion.div>

            {/* Alianzas */}
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="mb-10">
              <p className="text-xs font-semibold tracking-widest text-texto-secundario uppercase mb-4 text-center">Instituciones que confían en MUMA</p>
              <div className="flex flex-wrap justify-center gap-3">
                {alianzas.map((alianza, i) => (
                  <a
                    key={i}
                    href={alianza.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-white/10 text-sm text-texto-secundario bg-fondo-superficie hover:border-marca-principal/50 hover:text-marca-principal transition-colors duration-200"
                  >
                    {alianza.nombre}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Medios */}
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Newspaper size={14} className="text-marca-principal" aria-hidden="true" />
                <p className="text-xs font-semibold tracking-widest text-texto-secundario uppercase">Han escrito sobre MUMA</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {medios.map((medio, i) => (
                  <span key={i} className="px-4 py-2 rounded-full border border-white/10 text-sm text-texto-secundario bg-fondo-base">
                    {medio}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SECCIÓN 7: CTA FINAL — conexión con servicios y contacto ── */}
        <section className="bg-fondo-base py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}
              className="border border-marca-principal/30 rounded-2xl p-10 sm:p-14 text-center"
            >
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-4">Siguiente paso</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-texto-titulo mb-4">
                Si MUMA encaja con lo que buscas, cuéntanos el proyecto.
              </h2>
              <p className="text-texto-secundario leading-relaxed mb-10 max-w-lg mx-auto">
                Hacemos una primera conversación sin coste para entender si podemos ayudarte. Si no somos la opción adecuada, te lo decimos.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 no-underline"
                >
                  Hablar con MUMA
                </a>
                <a
                  href="/servicios/realidad-virtual"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border border-white/15 text-texto-principal hover:border-marca-principal/50 hover:text-marca-principal transition-colors duration-200 no-underline"
                >
                  Ver servicios
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
