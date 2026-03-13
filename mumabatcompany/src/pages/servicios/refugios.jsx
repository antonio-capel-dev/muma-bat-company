// Página de servicio — Refugios para murciélagos
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ShieldCheck, Building2, Check, ArrowRight, PencilRuler, Hammer, MapPin, Leaf, TreePine, Camera } from 'lucide-react'

const schemaOrg = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Refugios monitorizados para murciélagos — control biológico de plagas",
  "provider": {
    "@type": "Organization",
    "name": "MUMA BAT COMPANY",
    "url": "https://mumabatcompany.com"
  },
  "description": "Refugios artesanales para murciélagos fabricados en Málaga con madera de alta calidad y materiales biodegradables. Control biológico de plagas sin pesticidas. Instalación y seguimiento experto incluido.",
  "areaServed": "ES",
  "serviceType": "Control Biológico de Plagas — Refugios para murciélagos"
})

const varianteSeccion = {
  oculto: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

const stats = [
  { cifra: '3.000', unidad: 'mosquitos/noche', label: 'elimina un solo murciélago' },
  { cifra: '4', unidad: 'plagas controladas', label: 'mosquito tigre, mosca del olivo, polilla del racimo, procesionaria' },
  { cifra: '100%', unidad: 'ecológico', label: 'sin pesticidas ni productos químicos' },
  { cifra: '2', unidad: 'cámaras interiores', label: 'para que los murciélagos elijan según temperatura' },
]

const caracteristicas = [
  { Icono: PencilRuler, titulo: 'Diseño bioclimático', descripcion: '2 cámaras grandes para que los murciélagos elijan según temperatura y humedad. Superficies interiores rayadas para que se sujeten con comodidad.' },
  { Icono: Hammer, titulo: 'Fabricación artesanal en Málaga', descripcion: 'Fabricados a mano con madera de alta calidad, técnicas de impresión 3D y materiales biodegradables y compostables.' },
  { Icono: Leaf, titulo: 'Resistencia total al exterior', descripcion: 'Resistentes a UV, humedad e inclemencias del tiempo. Sin rendijas, sin clavos peligrosos, sin siliconas contaminantes.' },
  { Icono: MapPin, titulo: 'Georreferenciados y numerados', descripcion: 'Cada refugio se georeferencia y numera para seguimientos personalizados. Instalación segura en árboles, fachadas o postes sin daños.' },
]

const modalidades = [
  {
    Icono: Home,
    titulo: 'Refugio artesanal individual',
    descripcion: 'Caja-refugio fabricada en Málaga con madera de alta calidad y materiales biodegradables. Diseño de 2 cámaras con superficies rayadas. Instalación incluida en árbol, fachada o poste.',
    publico: 'Hoteles · Campings · Centros educativos · AMPAs',
  },
  {
    Icono: TreePine,
    titulo: 'Refugios para finca agrícola',
    descripcion: 'Planificación del número de unidades y ubicaciones óptimas para el control de plagas agrícolas: mosca del olivo, polilla del racimo, procesionaria del pino y otras.',
    publico: 'Agricultores · Silvicultores · Cooperativas',
  },
  {
    Icono: Building2,
    titulo: 'Red corporativa o municipal',
    descripcion: 'Diseño e instalación de una red de refugios a escala. Georreferenciación, numeración y plan de mantenimiento. Documentación para informes de sostenibilidad o RSC.',
    publico: 'Ayuntamientos · Campos de golf · Parques empresariales',
  },
  {
    Icono: ShieldCheck,
    titulo: 'Asesoramiento y seguimiento experto',
    descripcion: 'Estudio de viabilidad previo, instalación por técnicos especialistas en quirópteros y seguimiento anual de resultados. Incluido en todos los formatos.',
    publico: 'Todos los perfiles · ONGs · Instituciones públicas',
  },
]

const paraQuien = [
  { perfil: 'Campos de golf, hoteles y campings', necesidad: 'Reducir mosquitos e insectos en exteriores sin químicos. Una solución sostenible y diferenciadora para los huéspedes.' },
  { perfil: 'Agricultores, silvicultores y cooperativas', necesidad: 'Control biológico de mosca del olivo, polilla del racimo y procesionaria del pino. Ahorro de miles de euros en pesticidas.' },
  { perfil: 'Administraciones e instituciones públicas', necesidad: 'Control natural en zonas verdes urbanas y espacios protegidos, con valor educativo y respaldo científico.' },
  { perfil: 'Centros comerciales y de visitantes', necesidad: 'Mejorar el confort en zonas exteriores y reducir insectos sin tratamientos químicos recurrentes.' },
  { perfil: 'Empresas de tratamientos fitosanitarios', necesidad: 'Ampliar la oferta con soluciones 100% ecológicas para clientes que buscan alternativas sostenibles.' },
  { perfil: 'Centros educativos y AMPAs', necesidad: 'Instalación con valor pedagógico real: los alumnos observan y aprenden sobre biodiversidad y control natural de plagas.' },
  { perfil: 'ONGs y asociaciones de protección de la naturaleza', necesidad: 'Infraestructura de conservación verificable, georeferenciada y con seguimiento técnico experto.' },
]

const diferenciadores = [
  'Sin rendijas, sin clavos peligrosos, sin siliconas contaminantes. Cada refugio está diseñado exclusivamente para ser ocupado por murciélagos, no fabricado en serie.',
  'Materiales de alta calidad que no se doblan ni agrietan. Madera técnica, impresión 3D y materiales biodegradables y compostables para la máxima durabilidad.',
  'Tamaño mayor con ventilación adecuada: 2 cámaras interiores con superficies rayadas para que los murciélagos elijan la temperatura que prefieren en cada estación.',
  'Asesoramiento y seguimiento experto incluido. No vendemos una caja: instalamos infraestructura de conservación con estudio de viabilidad y seguimiento anual de resultados.',
]

export default function Refugios() {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Refugios para murciélagos — Fabricados en Málaga | MUMA BAT COMPANY</title>
        <meta name="description" content="Refugios artesanales para murciélagos fabricados en Málaga con madera de alta calidad y materiales biodegradables. Control biológico de plagas sin pesticidas. 1 murciélago elimina 3.000 mosquitos por noche." />
        <meta property="og:title" content="Refugios para murciélagos — Fabricados en Málaga | MUMA BAT COMPANY" />
        <meta property="og:description" content="Refugios artesanales para murciélagos con control biológico de plagas. Sin pesticidas. Instalación y seguimiento experto incluido." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mumabatcompany.com/servicios/refugios" />
        <link rel="canonical" href="https://mumabatcompany.com/servicios/refugios" />
        <script type="application/ld+json">{schemaOrg}</script>
      </Helmet>

      <main>

        {/* ── HERO ── */}
        <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-28 pb-16 bg-fondo-base overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(0,255,157,0.06) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-6xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <motion.p
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                  className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-5"
                >
                  Servicio · Infraestructura de Conservación
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-texto-titulo mb-6"
                >
                  Refugios artesanales{' '}
                  <span className="text-marca-principal">para murciélagos</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg sm:text-xl text-texto-secundario max-w-2xl leading-relaxed mb-10"
                >
                  Fabricados artesanalmente en Málaga con madera de alta calidad y materiales biodegradables. Control biológico de plagas de insectos. Sin pesticidas. Con asesoramiento y seguimiento experto incluido.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                >
                  <a
                    href="#contacto"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 no-underline"
                  >
                    Solicitar presupuesto
                  </a>
                  <a
                    href="#modalidades"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-white/15 text-texto-principal hover:bg-fondo-superficie hover:border-white/25 transition-all duration-200 no-underline"
                  >
                    Ver modalidades <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
                className="w-full lg:w-[400px] shrink-0"
              >
                <div className="bg-fondo-superficie rounded-2xl border border-white/5 aspect-[4/3] flex flex-col items-center justify-center gap-3 p-8">
                  <Camera size={36} className="text-marca-principal/40" aria-hidden="true" />
                  <p className="text-xs text-texto-secundario/50 text-center leading-snug">Imagen próximamente</p>
                  <p className="text-xs text-texto-secundario/30 text-center leading-snug italic">Refugio artesanal para murciélagos</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── STATS / IMPACTO ── */}
        <section className="bg-fondo-secundario py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } } }}
                  className="bg-fondo-superficie rounded-2xl p-6 border border-white/5 text-center"
                >
                  <p className="text-3xl sm:text-4xl font-bold text-marca-principal leading-none mb-1">{s.cifra}</p>
                  <p className="text-xs font-semibold text-texto-titulo uppercase tracking-wide mb-2">{s.unidad}</p>
                  <p className="text-xs text-texto-secundario leading-relaxed">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CARACTERÍSTICAS DEL REFUGIO ── */}
        <section className="bg-fondo-base py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-14">
              <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="flex-1 text-center lg:text-left">
                <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">El producto</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">No es una caja de madera cualquiera</h2>
                <p className="text-texto-secundario max-w-xl">Cada refugio está diseñado para ser ocupado. Materiales, dimensiones y acabados pensados exclusivamente para quirópteros.</p>
              </motion.div>
              <motion.div
                initial="oculto" whileInView="visible" viewport={{ once: true }}
                variants={{ oculto: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.15 } } }}
                className="w-full lg:w-[340px] shrink-0"
              >
                <div className="bg-fondo-superficie rounded-2xl border border-white/5 aspect-[4/3] flex flex-col items-center justify-center gap-3 p-8">
                  <Camera size={28} className="text-marca-principal/40" aria-hidden="true" />
                  <p className="text-xs text-texto-secundario/50 text-center leading-snug">Imagen próximamente</p>
                  <p className="text-xs text-texto-secundario/30 text-center leading-snug italic">Refugio MUMA — diseño bioclimático de 2 cámaras</p>
                </div>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {caracteristicas.map(({ Icono, titulo, descripcion }, i) => (
                <motion.div
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } } }}
                  className="relative bg-fondo-superficie rounded-2xl p-6 border border-white/5 hover:border-marca-principal/25 transition-colors duration-300 flex flex-col"
                >
                  <Icono size={24} className="text-marca-principal mb-3" aria-hidden="true" />
                  <h3 className="text-base font-bold text-texto-titulo mb-2">{titulo}</h3>
                  <p className="text-sm text-texto-secundario leading-relaxed">{descripcion}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARA QUIÉN ── */}
        <section className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Diseñado para</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">¿Tu organización necesita esto?</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">Trabajamos con empresas e instituciones que buscan una solución sostenible y efectiva frente a plagas de insectos.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {paraQuien.map((item, i) => (
                <motion.div
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } } }}
                  className="bg-fondo-superficie rounded-2xl p-7 border border-white/5"
                >
                  <p className="text-sm font-bold text-marca-principal mb-2">{item.perfil}</p>
                  <p className="text-sm text-texto-secundario leading-relaxed">{item.necesidad}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALERÍA ── */}
        <section className="bg-fondo-base py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Imágenes</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">Galería de refugios</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Refugio artesanal instalado en árbol',
                'Interior del refugio — cámaras bioclimáticas',
                'Proceso de fabricación en Málaga',
                'Red de refugios en finca agrícola',
              ].map((descripcion, i) => (
                <motion.div
                  key={i}
                  initial="oculto" whileInView="visible" viewport={{ once: true }}
                  variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } } }}
                  className="bg-fondo-superficie rounded-2xl border border-white/5 aspect-video flex flex-col items-center justify-center gap-3 p-6"
                >
                  <Camera size={28} className="text-marca-principal/40" aria-hidden="true" />
                  <p className="text-xs text-texto-secundario/50 text-center leading-snug">Imagen próximamente</p>
                  <p className="text-xs text-texto-secundario/30 text-center leading-snug italic">{descripcion}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MODALIDADES ── */}
        <section id="modalidades" className="bg-fondo-secundario py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Formatos disponibles</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">Modalidades del servicio</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">Cada instalación es diferente. Adaptamos el número de refugios, la ubicación y el nivel de seguimiento a tu caso.</p>
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

        {/* ── VENTAJA COMPETITIVA ── */}
        <section className="bg-fondo-base py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="oculto" whileInView="visible" viewport={{ once: true }} variants={varianteSeccion} className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest text-marca-principal uppercase mb-3">Frente a cajas comerciales</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-4">Lo que nos diferencia</h2>
              <p className="text-texto-secundario max-w-xl mx-auto">Las cajas comerciales genéricas no se colonizan. Los refugios MUMA están diseñados, fabricados e instalados para que los murciélagos los ocupen de verdad.</p>
            </motion.div>
            <motion.div
              initial="oculto" whileInView="visible" viewport={{ once: true }}
              variants={{ oculto: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="mb-10"
            >
              <div className="bg-fondo-superficie rounded-2xl border border-white/5 aspect-video w-full max-w-3xl mx-auto flex flex-col items-center justify-center gap-3 p-8">
                <Camera size={28} className="text-marca-principal/40" aria-hidden="true" />
                <p className="text-xs text-texto-secundario/50 text-center leading-snug">Imagen próximamente</p>
                <p className="text-xs text-texto-secundario/30 text-center leading-snug italic">Comparativa: refugio MUMA vs. caja comercial genérica</p>
              </div>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-texto-titulo mb-5">¿Tienes un espacio con plagas?</h2>
              <p className="text-texto-secundario leading-relaxed mb-8">
                Cuéntanos el tipo de espacio, la superficie y el problema que quieres resolver. En 24 horas te enviamos una propuesta con número de refugios y presupuesto detallado. Ticket medio: 450–550 €.
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
