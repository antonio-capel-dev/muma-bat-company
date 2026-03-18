// Página de contacto
import { useState } from 'react'                          // Hook para manejar el estado del formulario
import { ChevronDown } from 'lucide-react'                // Icono de flecha para el acordeón
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import Footer from '../components/footer'

const varianteSeccion = {
  oculto: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
}

const metodos = [
  {
    Icono: Mail,
    titulo: 'Email',
    valor: 'info@murcielagosmalaga.com',
    href: 'mailto:info@murcielagosmalaga.com',
    etiqueta: 'Escríbenos',
  },
  {
    Icono: Phone,
    titulo: 'Teléfono',
    valor: '+34 664 213 450',
    href: 'tel:+34664213450',
    etiqueta: 'Llamar',
  },
  {
    Icono: MessageCircle,
    titulo: 'WhatsApp',
    valor: '+34 664 213 450',
    href: 'https://wa.me/34664213450',
    etiqueta: 'Abrir chat',
  },
  {
    Icono: MapPin,
    titulo: 'Ubicación',
    valor: 'Polo Digital de Málaga',
    href: null,
    etiqueta: null,
  },
]

// Lista de preguntas frecuentes con su respuesta
const faqs = [
  {
    pregunta: '¿Los murciélagos son peligrosos para las personas?',                              // Pregunta 1
    respuesta: 'No. Los murciélagos son animales tímidos que evitan el contacto con las personas. No atacan ni se enredan en el pelo, esos son mitos sin ninguna base científica. En España no existe ninguna especie de murciélago que se alimente de sangre. Son animales nocturnos que se alimentan exclusivamente de insectos y que contribuyen de forma directa a reducir las plagas de mosquitos en nuestro entorno.',
  },
  {
    pregunta: '¿Cuántos mosquitos puede eliminar un murciélago en una noche?',                   // Pregunta 2
    respuesta: 'Un solo murciélago pequeño puede eliminar entre 1.000 y 3.000 insectos por noche, incluyendo mosquitos, polillas y saltamontes. Una colonia de 50 individuos puede eliminar hasta 150.000 mosquitos en una sola noche, sin pesticidas, sin costes recurrentes y sin ningún efecto secundario sobre el ecosistema.',
  },
  {
    pregunta: '¿Cómo eliminar mosquitos sin pesticidas?',                                        // Pregunta 3
    respuesta: 'La forma más efectiva y sostenible de reducir las poblaciones de mosquitos sin pesticidas es favorecer la presencia de sus depredadores naturales, especialmente los murciélagos. MUMA instala refugios para murciélagos en jardines, fincas, hoteles y campos de golf que crean colonias estables capaces de controlar las plagas de forma natural y permanente. Es una solución 100% ecológica con impacto económico medible.',
  },
  {
    pregunta: '¿Qué es una Bat Night y cómo puedo organizar una?',                               // Pregunta 4
    respuesta: 'Una Bat Night es un evento nocturno de conservación y divulgación científica que combina detección de ultrasonidos en tiempo real, la experiencia de realidad virtual MuMa Bat Cave Experience, charlas científicas y talleres educativos. Se adapta a cualquier tipo de espacio: museos, reservas naturales, centros comerciales, hoteles o ayuntamientos. Si quieres organizar una Bat Night en tu espacio o municipio, escríbenos a info@murcielagosmalaga.com y te enviamos toda la información.',
  },
  {
    pregunta: '¿Cómo funciona la realidad virtual aplicada a la educación ambiental?',           // Pregunta 5
    respuesta: 'La MuMa Bat Cave Experience VR es una experiencia inmersiva donde el usuario explora cuevas reales escaneadas en 3D, escucha ultrasonidos auténticos de murciélagos ibéricos y comprende su papel ecológico sin generar ningún impacto sobre las poblaciones reales. La experiencia está disponible en formato licencia B2B para museos, hoteles y centros educativos, y en formato evento para Bat Nights y actividades de divulgación. Más de 700 personas la han vivido ya en 2025.',
  },
  {
    pregunta: '¿Dónde puedo comprar o instalar un refugio para murciélagos en España?',          // Pregunta 6
    respuesta: 'MUMA fabrica y instala refugios para murciélagos de forma artesanal en Málaga. Los refugios están disponibles para particulares, empresas, ayuntamientos y agricultores. Cada refugio incluye asesoramiento sobre la ubicación óptima, instalación profesional y seguimiento científico personalizado. Para solicitar presupuesto escríbenos a info@murcielagosmalaga.com o llámanos al +34 664 213 450.',
  },
  {
    pregunta: '¿Qué hacer si encuentro un murciélago herido?',                                   // Pregunta 7
    respuesta: 'Si encuentras un murciélago herido o en el suelo durante el día, no lo toques con las manos. Usa guantes o una tela gruesa para cogerlo con cuidado y colócalo en una caja con ventilación en un lugar tranquilo y oscuro. No le des agua ni comida. Contacta con el Centro de Recuperación de Fauna Silvestre más cercano o con SEPRONA. Si estás en Málaga puedes escribirnos a info@murcielagosmalaga.com y te orientamos sobre qué hacer.',
  },
  {
    pregunta: '¿Qué especies de murciélagos hay en Málaga y la Costa del Sol?',                  // Pregunta 8
    respuesta: 'La provincia de Málaga alberga una gran diversidad de quirópteros. Entre las especies más comunes encontramos el murciélago común (Pipistrellus pipistrellus), el murciélago de cueva (Miniopterus schreibersii), el murciélago ratonero grande (Myotis myotis) y el murciélago de herradura mediterráneo (Rhinolophus euryale). Especies más amenazadas como la barbastela (Barbastella barbastellus) o el murciélago ratonero forestal (Myotis bechsteinii) también están presentes en ecosistemas forestales bien conservados de la provincia.',
  },
]

export default function Contacto() {

  // Índice de la pregunta abierta; null significa que ninguna está desplegada
  const [abierta, setAbierta] = useState(null)

  // Alterna la pregunta abierta: si ya estaba abierta la cierra, si no la abre
  function toggleFaq(i) {
    setAbierta(prev => (prev === i ? null : i))
  }

  // Estado inicial con todos los campos del formulario vacíos
  const [form, setForm] = useState({
    nombre: '',           // Nombre completo
    email: '',            // Correo electrónico
    telefono: '',         // Número de teléfono
    motivo: '',           // ¿Por qué nos contactas? (select)
    momento: '',          // Mejor momento para contactar (select)
    asunto: '',           // Motivo / asunto breve
    mensaje: '',          // Mensaje largo
    privacidad: false,    // Checkbox de política de privacidad
  })

  // Actualiza el campo correspondiente cada vez que el usuario escribe o selecciona algo
  function handleChange(e) {
    const { name, value, type, checked } = e.target          // Extrae nombre, valor y tipo del input
    setForm(prev => ({
      ...prev,                                                // Mantiene los demás campos intactos
      [name]: type === 'checkbox' ? checked : value,         // Para checkbox guarda boolean, para el resto guarda el texto
    }))
  }

  // Al hacer clic en "Enviar mensaje" construye un mailto con todos los campos
  function handleSubmit(e) {
    e.preventDefault()                                        // Evita que la página se recargue

    // Construye el cuerpo del correo con cada campo en una línea
    const cuerpo = [
      `Nombre: ${form.nombre}`,
      `Email: ${form.email}`,
      `Teléfono: ${form.telefono}`,
      `Motivo de contacto: ${form.motivo}`,
      `Mejor momento: ${form.momento}`,
      `Asunto: ${form.asunto}`,
      ``,
      `Mensaje:`,
      form.mensaje,
    ].join('\n')

    // Codifica el asunto y el cuerpo para que sean válidos en una URL mailto
    const subject = encodeURIComponent(`[Web] ${form.motivo} — ${form.nombre}`)
    const body = encodeURIComponent(cuerpo)

    // Abre el cliente de correo del usuario con el destinatario y los datos rellenos
    window.location.href = `mailto:info@murcielagosmalaga.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Contacto — MUMA BAT COMPANY</title>
        <meta name="description" content="Contacta con MUMA BAT COMPANY. Email, teléfono y WhatsApp. Respondemos en menos de 24 horas. Polo Digital de Málaga." />
        <meta property="og:title" content="Contacto | MUMA BAT COMPANY" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mumabatcompany.com/contacto" />
        <link rel="canonical" href="https://mumabatcompany.com/contacto" />
      </Helmet>

      <main className="min-h-screen bg-[#030a06] text-white">

        {/* ── Cabecera de la sección ── */}
        <motion.section
          variants={varianteSeccion}
          initial="oculto"
          animate="visible"
          className="pt-28 pb-12 text-center px-6"
        >
          {/* Etiqueta superior decorativa */}
          <span className="inline-block text-marca-principal text-sm font-semibold tracking-widest uppercase mb-4">
            Contacto
          </span>

          {/* Título principal de la página */}
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            Hablemos
          </h1>

          {/* Subtítulo descriptivo */}
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Cuéntanos en qué podemos ayudarte. Respondemos en menos de 24 horas.
          </p>
        </motion.section>

        {/* ── Tarjetas de métodos de contacto rápido ── */}
        <motion.section
          variants={varianteSeccion}
          initial="oculto"
          animate="visible"
          className="max-w-5xl mx-auto px-6 pb-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {/* Recorre cada método de contacto (email, teléfono, whatsapp, ubicación) */}
          {metodos.map(({ Icono, titulo, valor, href, etiqueta }) => (
            <div
              key={titulo}
              className="bg-fondo-secundario border border-slate-700 rounded-2xl p-5 flex flex-col gap-2"  // fondo y borde del footer
            >
              {/* Icono del método — color principal de marca */}
              <Icono className="text-marca-principal" size={22} />

              {/* Nombre del método — texto secundario de la paleta del footer */}
              <p className="text-xs text-texto-secundario uppercase tracking-widest">{titulo}</p>

              {/* Valor del método — texto de título de la paleta del footer */}
              <p className="text-sm font-semibold text-texto-titulo">{valor}</p>

              {/* Enlace de acción — color de marca, solo si existe href */}
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-marca-principal text-xs font-semibold hover:underline mt-auto"  // enlace en verde cyan
                >
                  {etiqueta} →
                </a>
              )}
            </div>
          ))}
        </motion.section>

        {/* ── Formulario de contacto ── */}
        <motion.section
          variants={varianteSeccion}
          initial="oculto"
          animate="visible"
          className="max-w-3xl mx-auto px-6 pb-24"
        >
          {/* Título del formulario */}
          <h2 className="text-2xl font-bold mb-8 text-center">Envíanos un mensaje</h2>

          {/* Formulario: al hacer submit llama a handleSubmit */}
          <form
            onSubmit={handleSubmit}
            className="bg-fondo-secundario border border-slate-700 rounded-3xl p-8 flex flex-col gap-6"  // fondo y borde del footer
          >

            {/* ── Cuadrícula de 2 columnas para los campos cortos ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Campo: Nombre completo */}
              <div className="flex flex-col gap-1">
                <label htmlFor="nombre" className="text-xs text-texto-secundario uppercase tracking-widest"  /* etiqueta: color secundario del footer */>
                  Nombre completo <span className="text-marca-principal">*</span>
                </label>
                <input
                  id="nombre"
                  name="nombre"                            // Coincide con la clave en el estado
                  type="text"
                  required                                  // Campo obligatorio
                  value={form.nombre}                       // Valor controlado por el estado
                  onChange={handleChange}                   // Actualiza el estado al escribir
                  placeholder="Tu nombre"
                  className="bg-fondo-secundario border border-slate-700 rounded-xl px-4 py-3 text-sm text-texto-titulo placeholder-gray-600 focus:outline-none focus:border-marca-principal transition-colors"  // campo con paleta del footer, foco en verde cyan
                />
              </div>

              {/* Campo: Correo electrónico */}
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-xs text-texto-secundario uppercase tracking-widest"  /* etiqueta: color secundario del footer */>
                  Correo electrónico <span className="text-marca-principal">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"                             // Valida formato de email automáticamente
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="bg-fondo-secundario border border-slate-700 rounded-xl px-4 py-3 text-sm text-texto-titulo placeholder-gray-600 focus:outline-none focus:border-marca-principal transition-colors"  // campo con paleta del footer, foco en verde cyan
                />
              </div>

              {/* Campo: Número de teléfono */}
              <div className="flex flex-col gap-1">
                <label htmlFor="telefono" className="text-xs text-texto-secundario uppercase tracking-widest"  /* etiqueta: color secundario del footer */>
                  Número de teléfono <span className="text-marca-principal">*</span>
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"                               // Teclado numérico en móvil
                  required
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="+34 600 000 000"
                  className="bg-fondo-secundario border border-slate-700 rounded-xl px-4 py-3 text-sm text-texto-titulo placeholder-gray-600 focus:outline-none focus:border-marca-principal transition-colors"  // campo con paleta del footer, foco en verde cyan
                />
              </div>

              {/* Campo: ¿Por qué nos contactas? */}
              <div className="flex flex-col gap-1">
                <label htmlFor="motivo" className="text-xs text-texto-secundario uppercase tracking-widest"  /* etiqueta: color secundario del footer */>
                  ¿Por qué nos contactas? <span className="text-marca-principal">*</span>
                </label>
                <select
                  id="motivo"
                  name="motivo"
                  required
                  value={form.motivo}
                  onChange={handleChange}
                  className="bg-fondo-secundario border border-slate-700 rounded-xl px-4 py-3 text-sm text-texto-titulo focus:outline-none focus:border-marca-principal transition-colors appearance-none"  // select con paleta del footer
                >
                  {/* Opción placeholder vacía */}
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="Preguntar una duda">Preguntar una duda</option>
                  <option value="Donación">Donación</option>
                  <option value="Acudir a una Bat Night">Acudir a una Bat Night</option>
                  <option value="Organizar una Bat Night">Organizar una Bat Night</option>
                  <option value="Comprar refugio">Comprar refugio</option>
                  <option value="Experiencia VR">Experiencia VR</option>
                </select>
              </div>

              {/* Campo: Mejor momento para contactar */}
              <div className="flex flex-col gap-1 md:col-span-2">
                <label htmlFor="momento" className="text-xs text-texto-secundario uppercase tracking-widest"  /* etiqueta: color secundario del footer */>
                  ¿Cuál es el mejor momento para contactarte? <span className="text-marca-principal">*</span>
                </label>
                <select
                  id="momento"
                  name="momento"
                  required
                  value={form.momento}
                  onChange={handleChange}
                  className="bg-fondo-secundario border border-slate-700 rounded-xl px-4 py-3 text-sm text-texto-titulo focus:outline-none focus:border-marca-principal transition-colors appearance-none"  // select con paleta del footer
                >
                  {/* Opción placeholder vacía */}
                  <option value="" disabled>Selecciona una franja horaria</option>
                  <option value="Mañana (9:00 AM – 12:00 PM)">Mañana (9:00 AM – 12:00 PM)</option>
                  <option value="Mediodía (12:00 PM – 15:00 PM)">Mediodía (12:00 PM – 15:00 PM)</option>
                  <option value="Tarde (15:00 PM – 19:00 PM)">Tarde (15:00 PM – 19:00 PM)</option>
                </select>
              </div>

            </div>{/* fin cuadrícula */}

            {/* Campo: Motivo / asunto breve — ocupa el ancho completo */}
            <div className="flex flex-col gap-1">
              <label htmlFor="asunto" className="text-xs text-texto-secundario uppercase tracking-widest"  /* etiqueta: color secundario del footer */>
                Motivo <span className="text-marca-principal">*</span>
              </label>
              <input
                id="asunto"
                name="asunto"
                type="text"
                required
                value={form.asunto}
                onChange={handleChange}
                placeholder="Resumen breve de tu consulta"
                className="bg-fondo-secundario border border-slate-700 rounded-xl px-4 py-3 text-sm text-texto-titulo placeholder-gray-600 focus:outline-none focus:border-marca-principal transition-colors"  // campo con paleta del footer, foco en verde cyan
              />
            </div>

            {/* Campo: Mensaje largo — ocupa el ancho completo */}
            <div className="flex flex-col gap-1">
              <label htmlFor="mensaje" className="text-xs text-texto-secundario uppercase tracking-widest"  /* etiqueta: color secundario del footer */>
                Mensaje <span className="text-marca-principal">*</span>
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={5}                                   // Altura inicial del área de texto
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Cuéntanos con detalle en qué podemos ayudarte…"
                className="bg-fondo-secundario border border-slate-700 rounded-xl px-4 py-3 text-sm text-texto-titulo placeholder-gray-600 focus:outline-none focus:border-marca-principal transition-colors resize-none"  // textarea con paleta del footer
              />
            </div>

            {/* Checkbox: aceptación de política de privacidad */}
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                name="privacidad"
                type="checkbox"
                required                                   // Impide enviar si no está marcado
                checked={form.privacidad}
                onChange={handleChange}
                className="mt-0.5 accent-[#00FF9D] w-4 h-4 shrink-0"  // accent colorea el check en verde
              />
              <span className="text-sm text-texto-secundario group-hover:text-texto-titulo transition-colors">  {/* texto del checkbox en paleta del footer */}
                Estoy de acuerdo con la{' '}
                <span className="text-marca-principal">política de privacidad, términos y condiciones</span>
              </span>
            </label>

            {/* Botón de envío — ancho completo, color verde cyan de la marca */}
            <button
              type="submit"
              className="w-full bg-[#00FF9D] text-black font-bold text-sm uppercase tracking-widest py-4 rounded-xl hover:bg-[#00e88d] active:scale-95 transition-all"
            >
              Enviar mensaje
            </button>

          </form>
        </motion.section>

        {/* ── Sección de mapa ── */}
        <motion.section
          variants={varianteSeccion}          // Reutiliza la misma animación de entrada que el resto de secciones
          initial="oculto"                    // Empieza invisible y desplazado hacia abajo
          animate="visible"                   // Anima hasta visible al montar el componente
          className="max-w-3xl mx-auto px-6 pb-24"  // Mismo ancho máximo y espaciado que el formulario
        >

          {/* Título de la sección de ubicación */}
          <h2 className="text-2xl font-bold mb-3 text-center">Dónde estamos</h2>

          {/* Descripción de la ubicación antes del mapa */}
          <p className="text-gray-400 text-sm text-center mb-6">
            Polo Digital de Málaga — Málaga, España
          </p>

          {/* Contenedor del mapa con borde y esquinas redondeadas al estilo de la web */}
          <div className="rounded-3xl overflow-hidden border border-slate-700">  {/* borde del footer; overflow-hidden recorta las esquinas del iframe */}

            {/* Iframe de Google Maps con la ubicación del Polo Digital de Málaga */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1902.1472088652306!2d-4.438801931240467!3d36.698116442312624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f77fe30405e5%3A0xb44f7091e40acc9e!2sPolo%20Digital%20M%C3%A1laga!5e0!3m2!1ses-419!2ses!4v1773748925688!5m2!1ses-419!2ses"
              width="100%"               // Ocupa todo el ancho del contenedor
              height="600"               // Altura fija del mapa en píxeles
              style={{ border: 0 }}      // Elimina el borde nativo del iframe
              allowFullScreen=""         // Permite ver el mapa en pantalla completa
              loading="lazy"             // Carga el mapa solo cuando el usuario llega hasta aquí
              referrerPolicy="no-referrer-when-downgrade"  // Política de referrer recomendada por Google
              title="Mapa Polo Digital de Málaga"          // Título accesible para lectores de pantalla
            />

          </div>
        </motion.section>

        {/* ── Sección de preguntas frecuentes (acordeón) ── */}
        <motion.section
          variants={varianteSeccion}          // Misma animación de entrada que el resto
          initial="oculto"
          animate="visible"
          className="max-w-3xl mx-auto px-6 pb-24"   // Mismo ancho y espaciado que el formulario
        >

          {/* Etiqueta superior decorativa */}
          <span className="block text-center text-marca-principal text-sm font-semibold tracking-widest uppercase mb-4">
            FAQ
          </span>

          {/* Título de la sección */}
          <h2 className="text-2xl font-bold mb-2 text-center">Preguntas frecuentes</h2>

          {/* Subtítulo explicativo */}
          <p className="text-gray-400 text-sm text-center mb-10">
            Todo lo que necesitas saber sobre los murciélagos y nuestros servicios.
          </p>

          {/* Lista de preguntas: recorre el array faqs */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (

              // Contenedor de cada ítem del acordeón — fondo de la paleta del footer
              <div
                key={i}
                className="border border-[#00FF9D]/20 rounded-2xl overflow-hidden bg-fondo-secundario"  // bg-fondo-secundario: misma paleta que el footer
              >

                {/* Botón que abre o cierra la pregunta */}
                <button
                  onClick={() => toggleFaq(i)}                              // Llama a toggleFaq con el índice actual
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={abierta === i}                             // Accesibilidad: indica si está expandido
                >
                  {/* Texto de la pregunta — color de título de la paleta del footer */}
                  <span className="text-sm font-semibold text-texto-titulo leading-snug">
                    {faq.pregunta}
                  </span>

                  {/* Icono de flecha — color principal de la marca */}
                  <ChevronDown
                    size={18}
                    className={`text-marca-principal shrink-0 transition-transform duration-300 ${abierta === i ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Respuesta: solo visible cuando el índice coincide con la pregunta abierta */}
                {abierta === i && (
                  <div className="px-6 pb-5">                              {/* Mismo padding horizontal que el botón */}
                    {/* Separador visual entre pregunta y respuesta */}
                    <div className="border-t border-[#00FF9D]/10 mb-4" />
                    {/* Texto de la respuesta — color secundario de la paleta del footer */}
                    <p className="text-sm text-texto-secundario leading-relaxed">
                      {faq.respuesta}
                    </p>
                  </div>
                )}

              </div>
            ))}
          </div>

        </motion.section>

      </main>

      <Footer />
    </>
  )
}
