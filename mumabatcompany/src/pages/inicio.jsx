// Página de inicio — home completa de MUMA BAT COMPANY
import { useState, useEffect } from 'react' // useState y useEffect para el contador animado
import Footer from '../components/footer'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Map, Users, Check, ArrowRight } from 'lucide-react' // Map y Users para los features del banner app
import Hero from '../components/hero'
import Calculadora from '../components/calculadora'

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

// Datos de los 3 bloques de la sección "Lo que hacemos"
const bloques = [
  {
    etiqueta: 'EXPERIENCIA INMERSIVA', // Etiqueta superior en verde cyan
    titulo: 'MuMa Bat Cave Experience VR', // Título del bloque
    texto: 'Exploramos cuevas reales escaneadas en 3D sin pisar el hábitat de los murciélagos. Más de 700 personas han vivido ya esta experiencia en museos, reservas naturales y espacios culturales de España y Portugal. Llevamos la cueva a las personas, no las personas a la cueva.', // Descripción del servicio
    enlaceTexto: 'Descubrir la experiencia', // Texto del enlace CTA
    enlaceHref: '/servicios/realidad-virtual', // Ruta de destino
  },
  {
    etiqueta: 'INFRAESTRUCTURA ECOLÓGICA', // Etiqueta superior en verde cyan
    titulo: 'Refugios artesanales y app de monitorización', // Título del bloque
    texto: 'Fabricamos refugios en Málaga con madera de alta calidad, técnicas de impresión 3D y materiales biodegradables. Un solo murciélago elimina hasta 3.000 mosquitos por noche. Estamos desarrollando además una app móvil para que cualquier persona pueda reportar avistamientos, escuchar ultrasonidos y contribuir a la red de monitorización científica de MUMA en tiempo real.', // Descripción del servicio
    enlaceTexto: 'Ver refugios', // Texto del enlace CTA
    enlaceHref: '/servicios/refugios', // Ruta de destino
  },
  {
    etiqueta: 'EVENTOS NOCTURNOS', // Etiqueta superior en verde cyan
    titulo: 'Bat Nights en toda España', // Título del bloque
    texto: 'Eventos nocturnos de conservación que combinan detección de ultrasonidos, realidad virtual y charlas científicas. Ya celebradas en Portugal, Cueva de Nerja, Plaza Mayor Málaga y Laguna de Fuente de Piedra con más de 700 participantes en 2025.', // Descripción del servicio
    enlaceTexto: 'Ver ediciones', // Texto del enlace CTA
    enlaceHref: '/servicios/bat-night', // Ruta de destino
  },
]

// Datos de los 3 features del banner app — cada uno con icono lucide-react, título y texto
const featuresApp = [
  { Icono: MapPin, titulo: 'Localiza avistamientos', texto: 'Marca en el mapa exactamente donde has visto murciélagos y deja tu registro' }, // Feature 1: geolocalización de avistamientos
  { Icono: Map, titulo: 'Red de refugios', texto: 'Consulta la ubicación de todos los refugios instalados por MUMA en tu zona' }, // Feature 2: mapa de refugios
  { Icono: Users, titulo: 'Mapa colaborativo', texto: 'Cada avistamiento registrado construye el primer mapa ciudadano de murciélagos de España' }, // Feature 3: ciencia ciudadana
]

// Mockup SVG del móvil con mapa oscuro, puntos parpadeantes y refugio MUMA
function MockupMovil() {
  return (
    <svg
      viewBox="0 0 180 320" // Área de dibujo del SVG: 180x320 unidades
      className="w-44 sm:w-52 drop-shadow-2xl" // Ancho responsivo, sombra para dar profundidad
      aria-label="Mockup app MUMA con mapa de avistamientos" // Accesibilidad
    >
      {/* Cuerpo del móvil — rectángulo con bordes muy redondeados */}
      <rect x="4" y="4" width="172" height="312" rx="22" ry="22" fill="#0d1a0f" stroke="#00FF9D" strokeWidth="2" />

      {/* Pantalla del móvil — área interior del display */}
      <rect x="12" y="28" width="156" height="256" rx="6" ry="6" fill="#0a1410" />

      {/* Cámara frontal — pastilla superior centrada */}
      <rect x="70" y="10" width="40" height="8" rx="4" ry="4" fill="#1a2e1f" />

      {/* Líneas de cuadrícula horizontales — simulan calles del mapa, muy sutiles */}
      <line x1="12" y1="70" x2="168" y2="70" stroke="#00FF9D" strokeWidth="0.3" strokeOpacity="0.2" />
      <line x1="12" y1="110" x2="168" y2="110" stroke="#00FF9D" strokeWidth="0.3" strokeOpacity="0.2" />
      <line x1="12" y1="150" x2="168" y2="150" stroke="#00FF9D" strokeWidth="0.3" strokeOpacity="0.2" />
      <line x1="12" y1="190" x2="168" y2="190" stroke="#00FF9D" strokeWidth="0.3" strokeOpacity="0.2" />
      <line x1="12" y1="230" x2="168" y2="230" stroke="#00FF9D" strokeWidth="0.3" strokeOpacity="0.2" />

      {/* Líneas de cuadrícula verticales — simulan calles del mapa, muy sutiles */}
      <line x1="60" y1="28" x2="60" y2="284" stroke="#00FF9D" strokeWidth="0.3" strokeOpacity="0.2" />
      <line x1="105" y1="28" x2="105" y2="284" stroke="#00FF9D" strokeWidth="0.3" strokeOpacity="0.2" />
      <line x1="150" y1="28" x2="150" y2="284" stroke="#00FF9D" strokeWidth="0.3" strokeOpacity="0.2" />

      {/* Puntos de avistamiento parpadeantes — clase animate-ping de Tailwind aplicada al círculo exterior */}
      {/* Avistamiento 1 — parte superior izquierda */}
      <circle cx="55" cy="80" r="6" fill="#00FF9D" fillOpacity="0.15">
        <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" /> {/* Expansión y contracción cíclica */}
        <animate attributeName="fill-opacity" values="0.15;0;0.15" dur="2s" repeatCount="indefinite" /> {/* Fade in/out sincronizado */}
      </circle>
      <circle cx="55" cy="80" r="3.5" fill="#00FF9D" fillOpacity="0.9" /> {/* Núcleo fijo del punto */}

      {/* Avistamiento 2 — parte derecha alta */}
      <circle cx="130" cy="100" r="6" fill="#00FF9D" fillOpacity="0.15">
        <animate attributeName="r" values="4;8;4" dur="2.4s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="fill-opacity" values="0.15;0;0.15" dur="2.4s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="130" cy="100" r="3.5" fill="#00FF9D" fillOpacity="0.9" />

      {/* Avistamiento 3 — parte inferior izquierda */}
      <circle cx="45" cy="195" r="6" fill="#00FF9D" fillOpacity="0.15">
        <animate attributeName="r" values="4;8;4" dur="1.8s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="fill-opacity" values="0.15;0;0.15" dur="1.8s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="45" cy="195" r="3.5" fill="#00FF9D" fillOpacity="0.9" />

      {/* Avistamiento 4 — parte central derecha */}
      <circle cx="145" cy="175" r="6" fill="#00FF9D" fillOpacity="0.15">
        <animate attributeName="r" values="4;8;4" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
        <animate attributeName="fill-opacity" values="0.15;0;0.15" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="145" cy="175" r="3.5" fill="#00FF9D" fillOpacity="0.9" />

      {/* Avistamiento 5 — zona central baja */}
      <circle cx="90" cy="235" r="6" fill="#00FF9D" fillOpacity="0.15">
        <animate attributeName="r" values="4;8;4" dur="2.6s" begin="0.8s" repeatCount="indefinite" />
        <animate attributeName="fill-opacity" values="0.15;0;0.15" dur="2.6s" begin="0.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="90" cy="235" r="3.5" fill="#00FF9D" fillOpacity="0.9" />

      {/* Refugio MUMA — punto más grande con color diferente (blanco brillante) y sin parpadeo */}
      <circle cx="90" cy="148" r="9" fill="#00FF9D" fillOpacity="0.2" /> {/* Halo exterior fijo del refugio */}
      <circle cx="90" cy="148" r="6" fill="#ffffff" /> {/* Núcleo blanco del refugio */}
      <circle cx="90" cy="148" r="3" fill="#00FF9D" /> {/* Centro cyan del refugio */}

      {/* Etiqueta del refugio — texto pequeño sobre el punto */}
      <text x="90" y="133" textAnchor="middle" fill="#00FF9D" fontSize="7" fontWeight="bold" fontFamily="sans-serif">REFUGIO MUMA</text>

      {/* Barra de estado inferior — simula barra de navegación del móvil */}
      <rect x="12" y="284" width="156" height="16" rx="2" fill="#0d1a0f" />
      <circle cx="90" cy="292" r="3" fill="#1a2e1f" /> {/* Botón home simulado */}
    </svg>
  )
}

// Contador animado que sube de 0 a 1247 al montar el componente
function ContadorAvistamientos() {
  const [cuenta, setCuenta] = useState(0) // Estado que almacena el número actual del contador

  useEffect(() => {
    const objetivo = 1247 // Número final al que debe llegar el contador
    const duracion = 1800 // Duración total de la animación en milisegundos
    const pasos = 60 // Número de actualizaciones durante la animación (aprox. 60fps)
    const intervalo = duracion / pasos // Tiempo entre cada actualización
    let paso = 0 // Paso actual del contador

    const timer = setInterval(() => { // Crea un intervalo que actualiza el número periódicamente
      paso++ // Avanza un paso
      const progreso = paso / pasos // Fracción de progreso (0 a 1)
      const easing = 1 - Math.pow(1 - progreso, 3) // Curva de easing cúbico para desacelerar al final
      setCuenta(Math.round(objetivo * easing)) // Actualiza el estado con el valor calculado
      if (paso >= pasos) clearInterval(timer) // Detiene el intervalo al llegar al objetivo
    }, intervalo)

    return () => clearInterval(timer) // Limpia el intervalo si el componente se desmonta
  }, []) // Array vacío: solo se ejecuta una vez al montar el componente

  return (
    <div className="mt-6 text-center"> {/* Contenedor centrado debajo del mockup */}
      <p className="text-3xl font-bold text-marca-principal tabular-nums"> {/* Número grande en verde cyan, fuente monoespaciada para evitar saltos */}
        {cuenta.toLocaleString('es-ES')} {/* Formatea el número con separador de miles español */}
      </p>
      <p className="text-xs text-texto-secundario mt-1 tracking-wide">avistamientos registrados</p> {/* Etiqueta descriptiva */}
    </div>
  )
}

// Banner de la app móvil MUMA — se muestra justo después de la sección "Lo que hacemos"
function BannerAppMovil() {
  return (
    <section id="app-movil" className="bg-fondo-base py-16 px-8 sm:px-12"> {/* Fondo base, ritmo vertical consistente con el resto */}
      <div className="max-w-6xl mx-auto"> {/* Contenedor centrado con ancho máximo */}
        <motion.div
          initial="oculto" // Estado inicial oculto para animación de entrada
          whileInView="visible" // Animación se activa al entrar en el viewport
          viewport={{ once: true }} // Solo se anima una vez al hacer scroll
          variants={varianteSeccion} // Variante de fade+slide ya definida arriba
          className="border border-marca-principal/40 rounded-2xl p-10 sm:p-14 bg-fondo-secundario" // Borde verde cyan + fondo secundario para destacar visualmente
        >

          {/* Layout de dos columnas: texto a la izquierda, mockup a la derecha */}
          <div className="flex flex-col md:flex-row md:items-center gap-12">

            {/* Columna izquierda — toda la información textual */}
            <div className="md:w-1/2">

              {/* Etiqueta pequeña superior "PRÓXIMAMENTE" */}
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-4">Próximamente</p>

              {/* Título grande del banner */}
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-3">App MUMA — Murciélagos en tu mapa</h2>

              {/* Subtítulo descriptivo */}
              <p className="text-lg text-marca-principal font-semibold mb-6">La primera app para localizar y registrar avistamientos de murciélagos en España</p>

              {/* Texto explicativo del propósito de la app */}
              <p className="text-texto-secundario leading-relaxed mb-10">
                Estamos desarrollando una aplicación móvil que te permitirá marcar en el mapa exactamente donde has visto murciélagos, dejar un registro con fecha, hora y notas, y consultar la ubicación de todos los refugios instalados por MUMA en tu zona. Cada avistamiento que registres contribuye a construir el primer mapa colaborativo de murciélagos de España.
              </p>

              {/* Grid de 3 features con icono lucide-react y descripción */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {featuresApp.map(({ Icono, titulo, texto }, i) => ( // Desestructuramos el icono como componente
                  <div key={i} className="bg-fondo-superficie rounded-xl p-5 border border-white/5"> {/* Tarjeta individual de feature */}
                    <Icono size={24} className="text-marca-principal mb-2" aria-hidden="true" /> {/* Icono lucide-react en verde cyan */}
                    <h3 className="text-sm font-bold text-texto-titulo mb-1">{titulo}</h3> {/* Nombre del feature */}
                    <p className="text-xs text-texto-secundario leading-relaxed">{texto}</p> {/* Descripción corta del feature */}
                  </div>
                ))}
              </div>


            </div>

            {/* Columna derecha — mockup del móvil y contador animado */}
            <div className="md:w-1/2 flex flex-col items-center justify-center"> {/* Centra verticalmente el contenido visual */}
              <MockupMovil /> {/* SVG del móvil con mapa animado */}
              <ContadorAvistamientos /> {/* Contador numérico que sube hasta 1.247 */}
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  )
}

// Sección "Lo que hacemos" — 3 bloques entre Hero y Por qué MUMA
function SeccionLoQueHacemos() {
  return (
    <section id="lo-que-hacemos" className="bg-fondo-base mt-24 pt-8 pb-20 px-8 sm:px-12"> {/* Fondo base, padding generoso */}
      <div className="max-w-6xl mx-auto"> {/* Ancho máximo centrado */}

        {/* Cabecera de sección con animación de entrada */}
        <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Nuestros servicios</p> {/* Supraetiqueta pequeña */}
          <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">Lo que hacemos</h2> {/* Título principal de sección */}
          <p className="text-texto-secundario max-w-xl mx-auto">Tecnología, naturaleza y conservación al servicio de las personas</p> {/* Subtítulo descriptivo */}
        </motion.div>

        {/* Grid de 3 columnas en desktop, 1 en móvil */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bloques.map((bloque, i) => ( // Iteramos sobre los 3 bloques
            <motion.div
              key={i} // Clave única para React
              initial="oculto" // Estado inicial de animación
              whileInView="visible" // Se activa al entrar en viewport
              viewport={{ once: true }} // Solo anima una vez
              variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.12 } } }} // Animación escalonada por bloque
              className="bg-fondo-secundario rounded-2xl p-7 border border-white/5 flex flex-col" // Fondo secundario, bordes sutiles, flex para empujar enlace al fondo
            >
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-4">{bloque.etiqueta}</p> {/* Etiqueta en verde cyan */}
              <h3 className="text-xl font-bold text-texto-titulo mb-4 leading-snug">{bloque.titulo}</h3> {/* Título del bloque, grande y bold */}
              <p className="text-sm text-texto-secundario leading-relaxed flex-1">{bloque.texto}</p> {/* Texto descriptivo, ocupa el espacio disponible */}
              <a
                href={bloque.enlaceHref} // Ruta de destino del servicio
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-marca-principal hover:gap-3 transition-all duration-200 no-underline group" // Enlace con flecha, animación de gap al hover
              >
                {bloque.enlaceTexto} {/* Texto del CTA */}
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" /> {/* Flecha con micro-animación */}
              </a>
            </motion.div>
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
      <SeccionLoQueHacemos /> {/* Nueva sección entre Hero y Por qué MUMA */}
      <BannerAppMovil /> {/* Banner app móvil ciencia ciudadana — justo después de Lo que hacemos */}
      <SeccionPorQueMuma />
      <Calculadora />
      <SeccionRedRefugios />
      <Footer />
      </main>
    </>
  )
}
