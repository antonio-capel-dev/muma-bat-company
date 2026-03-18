// Página sobre nosotros
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Leaf, Zap, Globe, Users, Camera, Glasses, BookOpen, Home, GraduationCap, Activity, Sprout, Newspaper } from 'lucide-react'
import Footer from '../components/footer'

const varianteSeccion = {
  oculto: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

const equipo = [
  {
    nombre: 'Antonio Moret',
    cargo: 'CEO',
    descripcion: 'Especialista en conservación y realidad virtual aplicada al ecoturismo. Impulsor de la visión de MUMA: usar tecnología inmersiva para proteger la biodiversidad sin invadir los hábitats naturales.',
  },
  {
    nombre: 'Laura Smit',
    cargo: 'Manager',
    descripcion: 'Gestión de proyectos sostenibles e investigación científica. Coordina las alianzas institucionales de MUMA y supervisa la ejecución de los programas de conservación y educación ambiental.',
  },
]

const valores = [
  {
    Icono: Leaf,
    titulo: 'Conservación primero',
    texto: 'Toda decisión tecnológica, comercial o comunicativa parte de una pregunta: ¿beneficia a los murciélagos y al ecosistema? Si no, no lo hacemos.',
  },
  {
    Icono: Zap,
    titulo: 'Tecnología con propósito',
    texto: 'La realidad virtual no es un fin en sí misma. Es la herramienta que nos permite acercar la naturaleza a las personas sin poner en riesgo lo que intentamos proteger.',
  },
  {
    Icono: Globe,
    titulo: 'Impacto medible',
    texto: 'Cada refugio instalado, cada participante en una Bat Night y cada licencia VR activada tiene un impacto documentado en la educación ambiental y en la biodiversidad local.',
  },
  {
    Icono: Users,
    titulo: 'Ciencia abierta',
    texto: 'Trabajamos con SECEMU, universidades, paradores y ayuntamientos porque la conservación es un esfuerzo colectivo. El conocimiento generado es de todos.',
  },
]

// array con los 6 servicios reales de la web de murcielagosmalaga.com
const servicios = [
  {
    Icono: Glasses, // icono de gafas para representar realidad virtual
    titulo: 'Realidad Virtual y Aumentada',
    descripcion: 'Experiencias inmersivas, modelado 3D y videojuegos educativos para conservación y ecoturismo.',
  },
  {
    Icono: BookOpen, // icono de libro abierto para educación y divulgación
    titulo: 'Educación Ambiental y Divulgación',
    descripcion: 'Rutas guiadas, talleres interactivos en VR y eventos de divulgación científica.',
  },
  {
    Icono: Home, // icono de casa para representar los refugios fabricados
    titulo: 'Fabricación de Refugios Sostenibles',
    descripcion: 'Refugios adaptados a cada especie de murciélago, para entornos urbanos y agrícolas.',
  },
  {
    Icono: GraduationCap, // icono de birrete para formación y asesoramiento
    titulo: 'Asesoramiento y Formación',
    descripcion: 'Formación en ciencia forestal para gestión ambiental eficaz y conservación sostenible.',
  },
  {
    Icono: Activity, // icono de actividad/onda para bioacústica y monitorización
    titulo: 'Consultoría Medioambiental',
    descripcion: 'Bioacústica y biodiversidad, monitorización de especies y estudios de impacto ambiental.',
  },
  {
    Icono: Sprout, // icono de brote para soluciones basadas en la naturaleza
    titulo: 'Soluciones Basadas en la Naturaleza',
    descripcion: 'Control biológico de plagas integrando refugios que fortalecen los ecosistemas.',
  },
]

// array con los medios de comunicación que han cubierto a MUMA
const medios = [
  'La Opinión de Málaga',
  'Málaga Hoy',
  'El Español',
  'Andalucía Lab',
  'Hola Andalucía',
  'Canal Málaga',
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

export default function Nosotros() {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Sobre nosotros — MUMA BAT COMPANY</title>
        <meta name="description" content="MUMA BAT COMPANY: tecnología inmersiva para proteger la biodiversidad. Conoce al equipo, nuestra misión y nuestras alianzas estratégicas." />
        <meta property="og:title" content="Sobre nosotros | MUMA BAT COMPANY" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mumabatcompany.com/nosotros" />
        <link rel="canonical" href="https://mumabatcompany.com/nosotros" />
      </Helmet>

      <main>

        {/* ── ¿QUIÉNES SOMOS? ── sección hero con equipo y datos reales en voz de Antonio */}
        <section className="relative bg-fondo-base pt-40 pb-20 px-6 overflow-hidden"> {/* fondo oscuro, padding top para el navbar */}

          {/* resplandor decorativo de fondo, no interactivo */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(31,225,167,0.07) 0%, transparent 65%)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl mx-auto"> {/* contenedor principal sobre el resplandor */}

            {/* etiqueta de ubicación — sede del equipo */}
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-5 text-center"
            >
              Polo Digital de Málaga {/* dirección física del equipo */}
            </motion.p>

            {/* título principal de la página */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-texto-titulo mb-6 text-center"
            >
              ¿Quiénes somos? {/* pregunta directa que invita a conocer al equipo */}
            </motion.h1>

            {/* párrafo introductorio en voz de Antonio — tono cercano y apasionado */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-texto-secundario leading-relaxed text-center max-w-2xl mx-auto mb-14"
            >
              Somos biólogos y tecnólogos convencidos de que los murciélagos son uno de los animales más útiles del planeta. Y de que la mayoría de la gente ni siquiera lo sabe todavía. {/* argumento central que define la misión */}
            </motion.p>

            {/* tarjetas del equipo — dos columnas en pantallas medianas y grandes */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16"
            >

              {/* tarjeta Antonio Moret — CEO y fundador */}
              <div className="bg-fondo-superficie rounded-2xl overflow-hidden border border-white/5 hover:border-marca-principal/25 transition-colors duration-300">
                <img src="/images/antonio-moret.jpg" alt="Antonio Moret, CEO de MUMA" className="w-full h-64 object-cover object-top rounded-t-2xl" />
                <div className="p-8">
                  <p className="text-xs font-semibold text-marca-principal uppercase tracking-wider mb-1">CEO</p> {/* cargo */}
                  <h3 className="text-lg font-bold text-texto-titulo mb-3">Antonio Moret</h3> {/* nombre completo */}
                  <p className="text-sm text-texto-secundario leading-relaxed">Especialista en conservación y realidad virtual aplicada al ecoturismo. Lleva más de una década estudiando quirópteros sobre el terreno.</p> {/* descripción real */}
                </div>
              </div>

              {/* tarjeta Laura Smit — Manager del proyecto */}
              <div className="bg-fondo-superficie rounded-2xl overflow-hidden border border-white/5 hover:border-marca-principal/25 transition-colors duration-300">
                {/* placeholder foto */}
                <div className="w-full h-48 bg-fondo-secundario flex flex-col items-center justify-center gap-2">
                  <Camera size={28} className="text-white/30" aria-hidden="true" />
                  <span className="text-xs text-white/30 font-medium">Foto próximamente</span>
                </div>
                <div className="p-8">
                  <p className="text-xs font-semibold text-marca-principal uppercase tracking-wider mb-1">Manager</p> {/* cargo */}
                  <h3 className="text-lg font-bold text-texto-titulo mb-3">Laura Smit</h3> {/* nombre completo */}
                  <p className="text-sm text-texto-secundario leading-relaxed">Gestión de proyectos sostenibles e investigación científica. Coordina las alianzas institucionales y los programas de conservación.</p> {/* descripción real */}
                </div>
              </div>

            </motion.div>

            {/* bloque de datos — "Por qué los murciélagos importan", en voz de Antonio */}
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            >

              {/* encabezado del bloque de datos */}
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3 text-center">
                Por qué los murciélagos importan {/* etiqueta de sección */}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-texto-titulo mb-3 text-center">
                Dato de interes {/* título con voz personal */}
              </h2>
              <p className="text-texto-secundario text-center max-w-xl mx-auto mb-10 text-sm leading-relaxed">
                Pertenecen al orden de los quirópteros "manos aladas" en griego. No son roedores. Son los mejores aliados que tienes contra las plagas, y están desapareciendo. {/* dato de contexto clave */}
              </p>

              {/* cuadrícula de 7 datos clave — 2 columnas en móvil, 3-4 en escritorio */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* dato 1: insectos por noche */}
                <div className="bg-fondo-superficie rounded-2xl p-6 border border-white/5 hover:border-marca-principal/20 transition-colors duration-300">
                  <p className="text-3xl font-bold text-marca-principal mb-2">3.000</p> {/* cifra impactante */}
                  <p className="text-sm text-texto-secundario leading-relaxed">insectos eliminados por un solo murciélago cada noche. Entre 1.000 y 3.000 mosquitos, polillas y saltamontes.</p> {/* contexto del dato */}
                </div>

                {/* dato 2: ahorro en pesticidas */}
                <div className="bg-fondo-superficie rounded-2xl p-6 border border-white/5 hover:border-marca-principal/20 transition-colors duration-300">
                  <p className="text-3xl font-bold text-marca-principal mb-2">€1–10M</p> {/* rango de ahorro */}
                  <p className="text-sm text-texto-secundario leading-relaxed">de ahorro anual estimado en pesticidas solo en España gracias al control natural de plagas que ejercen.</p> {/* impacto económico */}
                </div>

                {/* dato 3: polinización del agave */}
                <div className="bg-fondo-superficie rounded-2xl p-6 border border-white/5 hover:border-marca-principal/20 transition-colors duration-300">
                  <p className="text-3xl font-bold text-marca-principal mb-2">Tequila</p> {/* gancho inesperado */}
                  <p className="text-sm text-texto-secundario leading-relaxed">Polinizan el agave, la planta de la que se extrae el tequila. Sin murciélagos, no hay tequila.</p> {/* dato sorprendente para conectar */}
                </div>

                {/* dato 4: medicina */}
                <div className="bg-fondo-superficie rounded-2xl p-6 border border-white/5 hover:border-marca-principal/20 transition-colors duration-300">
                  <p className="text-3xl font-bold text-marca-principal mb-2">Medicina</p> {/* área de aplicación */}
                  <p className="text-sm text-texto-secundario leading-relaxed">Su estudio ha contribuido a mejorar tratamientos contra infartos y aneurismas. La naturaleza nos enseña a curar.</p> {/* relevancia médica */}
                </div>

                {/* dato 5: quirópteros, no roedores */}
                <div className="bg-fondo-superficie rounded-2xl p-6 border border-white/5 hover:border-marca-principal/20 transition-colors duration-300">
                  <p className="text-3xl font-bold text-marca-principal mb-2">Quirópteros</p> {/* nombre científico */}
                  <p className="text-sm text-texto-secundario leading-relaxed">"Manos aladas" en griego. No son roedores: son el único mamífero capaz de volar de forma activa.</p> {/* corrección del mito más común */}
                </div>

                {/* dato 6: declive de poblaciones */}
                <div className="bg-fondo-superficie rounded-2xl p-6 border border-white/5 hover:border-marca-principal/20 transition-colors duration-300">
                  <p className="text-3xl font-bold text-marca-principal mb-2">En declive</p> {/* estado actual */}
                  <p className="text-sm text-texto-secundario leading-relaxed">Sus poblaciones caen por pesticidas, deforestación y pérdida de refugios. Por eso instalamos los nuestros.</p> {/* conexión directa con el servicio */}
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* ── ¿QUÉ HACEMOS? ── nueva sección con misión, 6 servicios, dato clave y presencia en medios */}
        <section className="bg-fondo-secundario py-20 px-6"> {/* fondo alternado para separar visualmente del hero */}
          <div className="max-w-6xl mx-auto"> {/* contenedor centrado con ancho máximo amplio para la cuadrícula de 3 columnas */}

            {/* encabezado de sección con etiqueta, título y misión principal */}
            <motion.div
              initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}
              className="text-center mb-14"
            >
              {/* etiqueta pequeña en verde sobre el título */}
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">
                Lo que hacemos
              </p>

              {/* título principal de la sección */}
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-6">
                ¿Qué hacemos? ¿Cuál es nuestra misión?
              </h2>

              {/* misión principal extraída literalmente de murcielagosmalaga.com */}
              <p className="text-texto-secundario text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Promover el control biológico de plagas basándonos en estrategias de introducción natural de fauna auxiliar.{' '}
                <span className="text-texto-titulo font-semibold">Conservamos el presente, innovamos para el futuro.</span>
              </p>
            </motion.div>

            {/* cuadrícula de 6 tarjetas de servicios — 1 columna en móvil, 2 en tablet, 3 en escritorio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
              {servicios.map(({ Icono, titulo, descripcion }, i) => (
                <motion.div
                  key={i} // clave única por índice para el renderizado de la lista
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } } }}
                  className="bg-fondo-superficie rounded-2xl p-6 border border-white/5 hover:border-marca-principal/25 transition-colors duration-300"
                >
                  {/* contenedor circular del icono con fondo verde translúcido */}
                  <div className="w-10 h-10 rounded-xl bg-marca-principal/10 flex items-center justify-center mb-5">
                    <Icono size={20} className="text-marca-principal" aria-hidden="true" /> {/* icono del servicio */}
                  </div>

                  {/* nombre del servicio */}
                  <h3 className="text-sm font-bold text-texto-titulo mb-3 leading-snug">{titulo}</h3>

                  {/* descripción breve del servicio */}
                  <p className="text-sm text-texto-secundario leading-relaxed">{descripcion}</p>
                </motion.div>
              ))}
            </div>

            {/* dato clave destacado — cifra impactante sobre el valor de un murciélago */}
            <motion.div
              initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}
              className="bg-fondo-superficie rounded-2xl p-8 border border-marca-principal/20 text-center mb-16"
            >
              {/* cifra grande en verde para máximo impacto visual */}
              <p className="text-5xl sm:text-6xl font-bold text-marca-principal mb-3">1.000–3.000</p>

              {/* contexto del dato */}
              <p className="text-texto-secundario text-base sm:text-lg max-w-lg mx-auto">
                insectos puede comer un solo murciélago por noche. El mejor pesticida natural que existe.
              </p>
            </motion.div>

            {/* bloque de presencia en medios de comunicación */}
            <motion.div
              initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}
              className="text-center"
            >
              {/* encabezado del bloque de medios */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <Newspaper size={16} className="text-marca-principal" aria-hidden="true" /> {/* icono de periódico */}
                <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase">
                  Presencia en medios
                </p>
              </div>

              {/* lista de medios como píldoras con borde */}
              <div className="flex flex-wrap justify-center gap-3">
                {medios.map((medio, i) => (
                  <span
                    key={i} // clave única por índice
                    className="px-4 py-2 rounded-full border border-white/10 text-sm text-texto-secundario bg-fondo-base"
                  >
                    {medio} {/* nombre del medio de comunicación */}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── MISIÓN ── */}
        <section className="bg-fondo-base py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}>
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Nuestra misión</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-8">Con MuMa, la realidad virtual<br />no sustituye la naturaleza, la protege</h2>
              <div className="space-y-4 text-texto-secundario leading-relaxed text-base sm:text-lg">
                <p>
                  Los murciélagos son los grandes incomprendidos del ecosistema. Un solo individuo elimina hasta 3.000 mosquitos por noche. Son polinizadores, dispersores de semillas y bioindicadores de la salud ambiental. Y están desapareciendo.
                </p>
                <p>
                  En MUMA creemos que el problema no es falta de información: es falta de conexión. Por eso diseñamos experiencias que hacen que las personas <em>sientan</em> el valor de lo que existe fuera de las pantallas. Llevamos la cueva a las personas; no las personas a la cueva.
                </p>
                <p>
                  Desde el Polo Digital de Málaga, operamos en la intersección entre ciencia, tecnología y ecoturismo, con el respaldo de alianzas institucionales que cubren desde la investigación científica hasta el turismo de naturaleza.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── VALORES ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Principios</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo">Lo que nos guía</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {valores.map(({ Icono, titulo, texto }, i) => (
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

        {/* ── ALIANZAS ── */}
        <section className="bg-fondo-base py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-10">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Red de alianzas</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">Instituciones que confían en MUMA</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">Trabajamos con organismos científicos, culturales e institucionales comprometidos con la conservación de la biodiversidad.</p>
            </motion.div>
            <motion.div
              initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}
              className="flex flex-wrap justify-center gap-3"
            >
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
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
