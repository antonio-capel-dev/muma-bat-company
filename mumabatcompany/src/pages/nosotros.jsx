// Página MUMA — quiénes somos, origen, pilares, credenciales y cierre
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Camera, Newspaper, ArrowRight } from 'lucide-react'
import Footer from '../components/footer'

const varianteSeccion = {
  oculto: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

// Tres pilares que identificó Francisco en la mentoría de marca
const pilares = [
  {
    titulo: 'Ciencia y conservación',
    texto: 'Todo empieza aquí. Estudiamos murciélagos sobre el terreno, generamos datos bioacústicos y trabajamos con metodología científica contrastada. El conocimiento no es un adorno: es la base desde la que se diseña cada servicio.',
    img: '/images/murcielago.webp',
    imgAlt: 'Murciélago en hábitat natural — base científica de MUMA',
    imgPos: 'object-center',
  },
  {
    titulo: 'Tecnología e innovación',
    texto: 'La tecnología no es el fin, es el vehículo. La realidad virtual nos permite llevar la cueva a las personas sin pisar el hábitat. El monitoreo acústico nos permite medir lo que hacemos. Innovamos para que la naturaleza gane, no para impresionar.',
    img: '/images/chica-realidad-virtual.webp',
    imgAlt: 'Experiencia de realidad virtual inmersiva de MUMA',
    imgPos: 'object-top',
  },
  {
    titulo: 'Comunidad e impacto social',
    texto: 'El murciélago ibérico no se protege solo con ciencia. Se protege cuando las personas lo entienden, cuando las instituciones lo integran y cuando las empresas ven su valor económico real. Construimos comunidad porque la conservación es un esfuerzo colectivo.',
    img: '/images/1batnights.webp',
    imgAlt: 'Bat Night — evento de MUMA con comunidad y participación pública',
    imgPos: 'object-center',
  },
]

// Credenciales institucionales y científicas reales
const credenciales = [
  {
    sigla: 'ST3ER',
    nombre: 'Proyecto europeo ST3ER',
    descripcion: 'Investigación en 3 países (España, Portugal, Eslovenia). Financiado por SMP COSME de la UE. Resultado: Batcave Experience — producto comercial activo, más de 700 personas en 2025, sin fase piloto.',
    img: '/images/Murcielagos-Malaga-ST3ER-Proyect-2-1024x266.webp',
    imgAlt: 'Logo Proyecto ST3ER — Murciélagos Málaga',
  },
  {
    sigla: 'SECEMU',
    nombre: 'Sociedad Española para la Conservación y Estudio de los Murciélagos',
    descripcion: 'Miembros activos de SECEMU. Colaboramos en el Atlas de Distribución de Quirópteros Ibéricos y en programas de seguimiento de colonias.',
    img: '/images/Logo_SECEMU.webp',
    imgAlt: 'Logo SECEMU',
  },
  {
    sigla: 'EUROBATS',
    nombre: 'Acuerdo EUROBATS',
    descripcion: 'Alineados con el marco de conservación de murciélagos de la Unión Europea. Nuestros proyectos siguen los protocolos de monitorización reconocidos internacionalmente.',
    img: '/images/EUROBATS_logo.webp',
    imgAlt: 'Logo EUROBATS',
  },
  {
    sigla: 'FEDER',
    nombre: 'La Brújula — Cámara de Comercio de Málaga',
    descripcion: 'Apoyo institucional de La Brújula (financiado FEDER). Validación por parte del ecosistema empresarial e institucional de Málaga.',
    img: '/images/La-Brujula-150x150.webp',
    imgAlt: 'Logo La Brújula — Cámara de Comercio de Málaga',
  },
]

// Datos que conectan el valor de los murciélagos con los servicios de MUMA
const datosMurcielagos = [
  {
    cifra: '3.000',
    titulo: 'insectos por noche',
    texto: 'Un solo murciélago. Sin coste operativo, sin pesticidas, sin residuos. Por eso instalamos refugios: cada colonia es un sistema de control de plagas permanente.',
  },
  {
    cifra: 'Único',
    titulo: 'archivo bioacústico ibérico',
    texto: 'Grabaciones de ultrasonidos, mapas de distribución y datos de colonias recogidos en campo durante años. Hemos buscado equivalentes y no existe ninguno similar generado por una empresa privada en España.',
  },
  {
    cifra: '+700',
    titulo: 'personas en experiencia VR',
    texto: 'En museos, reservas naturales y eventos culturales de España y Portugal durante 2025. La experiencia está terminada y es un producto comercial activado.',
  },
  {
    cifra: 'En declive',
    titulo: 'sus poblaciones disminuyen',
    texto: 'Pesticidas, deforestación, pérdida de refugios. MUMA existe porque hay un problema real. Cada refugio instalado y cada persona formada es una respuesta directa.',
  },
]

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
  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>MUMA BAT COMPANY — Quiénes somos</title>
        <meta name="description" content="MUMA BAT COMPANY: empresa especializada en conservación de quirópteros mediante ciencia de campo, tecnología inmersiva y soluciones aplicadas. Proyecto europeo ST3ER, miembros de SECEMU." />
        <meta property="og:title" content="MUMA BAT COMPANY — Quiénes somos" />
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
              Polo Digital de Málaga · Desde 2018
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-texto-titulo mb-6"
            >
              Empezamos protegiendo murciélagos.<br />
              <span className="text-marca-principal">Hoy convertimos ese conocimiento en servicios reales.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-texto-secundario leading-relaxed max-w-2xl mx-auto mb-10"
            >
              Todo lo que hacemos parte de la misma idea: no imponemos soluciones a la naturaleza, aprendemos de ella para colaborar con ella. MUMA nace de la cooperación y la escucha — del campo, de las colonias, del territorio. No somos divulgadores ni una ONG. Somos una empresa especializada que trabaja con instituciones, administraciones y empresas que necesitan soluciones con base científica real.
            </motion.p>

            {/* Stats de credibilidad rápida */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {[
                { numero: 'ST3ER', label: 'Proyecto europeo UE' },
                { numero: '+700', label: 'personas en experiencia VR' },
                { numero: 'Único', label: 'archivo bioacústico ibérico' },
              ].map((stat, i) => (
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
              alt="Colonia de murciélagos en cueva natural — trabajo de campo de MUMA"
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay degradado que conecta la imagen con la siguiente sección */}
            <div className="absolute inset-0 bg-gradient-to-t from-fondo-secundario via-transparent to-transparent" />
            {/* Etiqueta flotante */}
            <div className="absolute bottom-5 left-6 bg-fondo-base/80 backdrop-blur-sm border border-marca-principal/20 rounded-xl px-4 py-2">
              <p className="text-xs font-semibold text-marca-principal uppercase tracking-widest">Trabajo de campo real</p>
              <p className="text-xs text-texto-secundario mt-0.5">Seguimiento de colonias · Proyecto ST3ER</p>
            </div>
          </motion.div>

        </section>

        {/* ── SECCIÓN 2: HISTORIA DE ORIGEN — el arco narrativo que pidió Francisco ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Columna texto */}
              <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion}>
                <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">De dónde venimos</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-8">
                  Empezamos con refugios de madera.<br />La tecnología nos abrió otro camino.
                </h2>
                {/* Frase clave destacada */}
                <blockquote className="border-l-2 border-marca-principal pl-5 mb-7">
                  <p className="text-texto-titulo font-semibold text-lg leading-snug">
                    "No domesticas el murciélago construyendo un refugio. Aprendes de la naturaleza para colaborar con ella."
                  </p>
                </blockquote>

                <div className="space-y-5 text-texto-secundario leading-relaxed text-base">
                  <p>
                    Todo empezó en campo: construyendo refugios artesanales, estudiando colonias, midiendo ultrasonidos. Pero rápido nos dimos cuenta de que el problema no era solo falta de hábitat — era falta de conexión. La mayoría de las personas no saben lo que hacen los murciélagos ni por qué están desapareciendo.
                  </p>
                  <p>
                    Cuando empezamos a digitalizar cuevas reales en 3D, algo cambió. La tecnología nos abrió un campo de posibilidades que no habíamos planeado: llevar el hábitat a las personas sin pisarlo, medir en tiempo real lo que nunca se había medido, construir el primer archivo bioacústico colaborativo de quirópteros ibéricos. Un archivo que, hoy, no tiene equivalente en ningún otro sitio.
                  </p>
                  <p>
                    De ahí surgió el ecosistema completo de MUMA: experiencias inmersivas, consultoría bioacústica, control biológico de plagas, educación ambiental, Bat Nights. <span className="text-texto-titulo font-medium">Se llama company porque es exactamente eso:</span> muchas líneas de acción con el mismo punto de vista debajo.
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
                  alt="Instalación de refugio ecológico para murciélagos — trabajo de campo de MUMA"
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
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Cómo trabajamos</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">Tres pilares. Un mismo criterio.</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">No elegimos uno de los tres. Los tres están presentes en cada proyecto que hacemos.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {pilares.map(({ titulo, texto, img, imgAlt, imgPos }, i) => (
                <motion.div
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.12 } } }}
                  className="bg-fondo-superficie rounded-2xl overflow-hidden border border-white/5 hover:border-marca-principal/25 transition-colors duration-300 group"
                >
                  {/* Imagen */}
                  <div className="relative overflow-hidden" style={{ height: '240px' }}>
                    <img
                      src={img}
                      alt={imgAlt}
                      className={`w-full h-full object-cover ${imgPos} transition-transform duration-700 group-hover:scale-105`}
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
                  alt="Experiencia Batcave — realidad virtual inmersiva de MUMA"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fondo-secundario/60 via-transparent to-transparent" />
                {/* Badge "producto activo" */}
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-fondo-base/80 backdrop-blur-sm border border-marca-principal/30 rounded-xl px-4 py-2">
                  <span className="w-2 h-2 rounded-full bg-marca-principal animate-pulse shrink-0" />
                  <p className="text-xs font-semibold text-marca-principal tracking-wide">Producto activo · Disponible ahora</p>
                </div>
              </div>

              {/* Texto */}
              <div>
                <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Tecnología aplicada</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-6 leading-tight">
                  Batcave Experience.<br />
                  <span className="text-marca-principal">No es un prototipo. Está funcionando.</span>
                </h2>
                <div className="space-y-4 text-texto-secundario leading-relaxed text-base mb-8">
                  <p>
                    La Batcave Experience es la experiencia de realidad virtual inmersiva de MUMA: una cueva real digitalizada en 3D, con murciélagos, ultrasonidos y datos de campo reales. La lleva el visitante sin pisar el hábitat.
                  </p>
                  <p>
                    No es una demo ni un prototipo. Está terminada, validada y ya ha pasado más de 700 personas en 2025 en museos, reservas naturales y eventos culturales de España y Portugal. Está disponible para instalación en cualquier espacio.
                  </p>
                  <p className="text-texto-titulo font-medium">
                    Es lo que separa a MUMA de cualquier centro de interpretación convencional: una experiencia que no museifica la ciencia, sino que la pone en tiempo real delante del visitante.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['+700 personas en 2025', 'España y Portugal', 'Lista para instalar', 'Proyecto ST3ER'].map((tag, i) => (
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
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Clientes</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">¿Trabajamos con tu organización?</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">
                Nuestros servicios están diseñados para perfiles muy concretos. Si te reconoces en alguno de estos, probablemente podemos ayudarte.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  tipo: 'Museos y centros de interpretación',
                  descripcion: 'Buscas una experiencia inmersiva que atraiga público sin dañar el hábitat. La Batcave Experience está terminada y lista para instalar.',
                  ejemplo: 'Museos naturales, acuarios, zoológicos',
                  servicio: 'Realidad Virtual',
                  img: '/images/museos.webp',
                  imgAlt: 'Niña disfrutando la experiencia de realidad virtual de MUMA',
                  imgPos: 'object-top',
                },
                {
                  tipo: 'Administraciones y espacios naturales',
                  descripcion: 'Necesitas cumplir objetivos de conservación o educación ambiental con metodología científica contrastada y respaldo europeo.',
                  ejemplo: 'Ayuntamientos, parques naturales, diputaciones',
                  servicio: 'Consultoría + Educación',
                  img: '/images/dentro-cueva.webp',
                  imgAlt: 'Interior de cueva natural — hábitat de murciélagos',
                  imgPos: 'object-center',
                },
                {
                  tipo: 'Empresas agrícolas y fincas',
                  descripcion: 'Quieres reducir el uso de pesticidas con soluciones basadas en la naturaleza. Cada colonia de murciélagos elimina hasta 3.000 insectos por noche.',
                  ejemplo: 'Viñedos, olivares, fincas hortícolas',
                  servicio: 'Refugios + Control biológico',
                  img: '/images/refugio_doble.webp',
                  imgAlt: 'Refugios de madera para murciélagos — solución ecológica MUMA',
                  imgPos: 'object-center',
                },
                {
                  tipo: 'Espacios culturales y comerciales',
                  descripcion: 'Buscas actividades de impacto para tu público o comunidad. Las Bat Nights combinan ciencia, divulgación y experiencia en un evento único.',
                  ejemplo: 'Centros comerciales, fundaciones, festivales',
                  servicio: 'Bat Nights + Eventos',
                  img: '/images/bat-night-eslovenia.webp',
                  imgAlt: 'Bat Night en Eslovenia — evento científico de MUMA',
                  imgPos: 'object-center',
                },
              ].map((perfil, i) => (
                <motion.div
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } } }}
                  className="bg-fondo-superficie rounded-2xl overflow-hidden border border-white/5 hover:border-marca-principal/25 transition-colors duration-300 group flex flex-col"
                >
                  {/* Imagen */}
                  <div className="relative overflow-hidden shrink-0" style={{ height: '180px' }}>
                    <img
                      src={perfil.img}
                      alt={perfil.imgAlt}
                      className={`w-full h-full object-cover ${perfil.imgPos} transition-transform duration-700 group-hover:scale-105`}
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
                No estoy seguro — hablamos y lo vemos
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── SECCIÓN 4: CREDENCIALES — el proyecto europeo y avales científicos ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Avales y credenciales</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">Base real</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">
                El proyecto europeo, las asociaciones científicas y los programas institucionales no son decoración. Son la base desde la que se toman decisiones.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {credenciales.map((cred, i) => (
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
                        src={cred.img}
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
                  src="/images/antonio-moret.webp"
                  alt="Antonio Moret, CEO de MUMA BAT COMPANY"
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-7">
                  <p className="text-xs font-semibold text-marca-principal uppercase tracking-wider mb-1">Fundador · Investigador de quirópteros</p>
                  <h3 className="text-lg font-bold text-texto-titulo mb-3">Antonio Moret</h3>
                  <p className="text-sm text-texto-secundario leading-relaxed mb-4">
                    Más de una década estudiando colonias de murciélagos sobre el terreno. Coinvestigador del proyecto europeo ST3ER en España, Portugal y Eslovenia. Responsable del único archivo bioacústico colaborativo de quirópteros ibéricos generado por una empresa privada en España.
                  </p>
                  <p className="text-sm text-texto-secundario leading-relaxed">
                    La visión de MUMA viene de ahí: no de la tecnología, sino del campo. La realidad virtual, los refugios, las Bat Nights — todo parte de años de trabajo directo con el animal y su ecosistema.
                  </p>
                </div>
              </div>

              {/* Laura Smit */}
              <div className="bg-fondo-superficie rounded-2xl overflow-hidden border border-white/5 hover:border-marca-principal/25 transition-colors duration-300">
                <img
                  src="/images/laura.webp"
                  alt="Laura Smit, Manager de MUMA BAT COMPANY"
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-7">
                  <p className="text-xs font-semibold text-marca-principal uppercase tracking-wider mb-1">Manager · Coordinación</p>
                  <h3 className="text-lg font-bold text-texto-titulo mb-3">Laura Smit</h3>
                  <p className="text-sm text-texto-secundario leading-relaxed">
                    Gestión de proyectos sostenibles e investigación científica. Coordina las alianzas institucionales de MUMA y supervisa la ejecución de los programas de conservación, educación ambiental y relaciones con entidades públicas.
                  </p>
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
                  <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">La base científica de lo que hacemos</p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-3">Por qué los murciélagos importan</h2>
                  <p className="text-texto-secundario max-w-xl text-sm leading-relaxed">
                    Cada cifra que usamos justifica un servicio. No divulgamos por divulgar.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {datosMurcielagos.map((dato, i) => (
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
                  alt="Bat Night en Eslovenia — MUMA en acción"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fondo-secundario/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-semibold text-marca-principal uppercase tracking-widest">Bat Night · Eslovenia</p>
                  <p className="text-xs text-white/60 mt-0.5">Proyecto ST3ER — actividades de campo internacionales</p>
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
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Red y visibilidad</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">Instituciones que respaldan a MUMA</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">
                Trabajamos con entidades científicas, culturales e institucionales comprometidas con la conservación activa.
              </p>
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
                <p className="text-xs font-semibold tracking-widest text-texto-secundario uppercase">Han escrito sobre MUMA</p>
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
                      className="max-h-full max-w-[140px] object-contain"
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
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-4">Siguiente paso</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-texto-titulo mb-4">
                Si MUMA encaja con lo que buscas,<br />cuéntanos el proyecto.
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
