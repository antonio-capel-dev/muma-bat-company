// Navbar principal — dos barras, oscura premium, fija en la parte superior
import { useState, useEffect, useRef } from 'react' // hooks de React para estado, efectos y referencias DOM
import { Link, useLocation } from 'react-router-dom' // Link para rutas internas, useLocation para saber la ruta activa
import { useLang } from '../context/LangContext' // contexto global de idioma

// Lista de idiomas disponibles con sus banderas y etiquetas
const idiomas = [
  { locale: 'es', flag: '/flags/es.svg', label: 'Español' }, // idioma español
  { locale: 'en', flag: '/flags/gb.svg', label: 'English' }, // idioma inglés
  { locale: 'de', flag: '/flags/de.svg', label: 'Deutsch' }, // idioma alemán
]

// Enlaces de la barra de navegación inferior
const navLinks = [
  { label: 'Home',           to: '/' },                           // página de inicio
  { label: 'MUMA',           to: '/nosotros' },                   // quiénes somos
  { label: 'Realidad Virtual', to: '/servicios/realidad-virtual' }, // servicio VR
  { label: 'Bat Night',      to: '/servicios/bat-night' },        // servicio bat night
  { label: 'Refugios',       to: '/servicios/refugios' },         // servicio refugios
  { label: 'Formación',      to: '/servicios/educacion-ambiental' }, // servicio formación
  { label: 'Contacto',       to: '/contacto' },                   // página de contacto
]

// Opciones del dropdown "Unirse" — rutas internas
const unirseOpciones = [
  { label: 'Voluntariado',      to: '/voluntarios' },       // formulario de voluntariado
  { label: 'Ciencia ciudadana', to: '/ciencia-ciudadana' }, // programa de ciencia ciudadana
]


// Opciones del dropdown "Tienda" — rutas internas
const tiendaOpciones = [
  { label: 'Refugios para murciélagos',  to: '/servicios/refugios' },           // página de refugios
  { label: 'Productos educativos',       to: '/servicios/educacion-ambiental' }, // página de educación ambiental
  { label: 'Experiencias',               to: '/servicios/bat-night' },           // página de bat night
]

// Icono de flecha que rota según si el dropdown está abierto o cerrado
const ChevronIcon = ({ open }) => (
  <svg
    className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} // rota 180° cuando el dropdown está abierto
    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} // sin relleno, trazo grueso
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /> // forma de chevron hacia abajo
  </svg>
)

// Componente de dropdown reutilizable para los tres botones superiores
function DropdownMenu({ nombre, label, opciones, esActivo, onToggle, onCerrar, esDestacado }) {
  return (
    <div className="relative"> {/* contenedor relativo para posicionar el panel flotante */}

      {/* Botón que abre/cierra el dropdown al hacer clic */}
      <button
        onClick={() => onToggle(nombre)} // alterna el dropdown entre abierto y cerrado
        className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 cursor-pointer ${
          esDestacado
            ? 'bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover' // estilo destacado (Tienda)
            : esActivo
              ? 'bg-marca-principal/10 border border-marca-principal text-marca-principal' // estilo activo (dropdown abierto)
              : 'border border-white/10 text-texto-secundario hover:text-texto-titulo hover:border-white/30' // estilo inactivo
        }`}
      >
        {label} {/* texto visible del botón */}
        <ChevronIcon open={esActivo} /> {/* flecha que indica dirección del dropdown */}
      </button>

      {/* Panel flotante — solo visible cuando el dropdown está activo */}
      {esActivo && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-fondo-secundario border border-white/10 rounded-xl shadow-xl overflow-hidden z-50"> {/* posicionado bajo el botón, alineado a la derecha */}

          {opciones.map((opcion) => ( // recorre todas las opciones del dropdown
            opcion.externo // si es externo (mailto u otro), usa <a>; si es ruta interna, usa Link
              ? (
                <a
                  key={opcion.label} // clave única para React
                  href={opcion.href} // destino externo (mailto:...)
                  onClick={onCerrar} // cierra el dropdown al hacer clic
                  className="block px-4 py-3 text-sm text-texto-secundario hover:text-texto-titulo hover:bg-white/5 transition-colors no-underline" // estilo de fila
                >
                  {opcion.label} {/* texto de la opción */}
                </a>
              ) : (
                <Link
                  key={opcion.label} // clave única para React
                  to={opcion.to} // ruta interna de react-router
                  onClick={onCerrar} // cierra el dropdown al hacer clic
                  className="block px-4 py-3 text-sm text-texto-secundario hover:text-texto-titulo hover:bg-white/5 transition-colors no-underline" // estilo de fila
                >
                  {opcion.label} {/* texto de la opción */}
                </Link>
              )
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)   // controla si el menú móvil está abierto
  const [dropdown, setDropdown]       = useState(null)    // nombre del dropdown activo: 'unirse' | 'donar' | 'tienda' | null
  const { locale, setLocale }         = useLang()         // idioma activo y función para cambiarlo
  const location                      = useLocation()     // ruta actual del navegador
  const dropdownRef                   = useRef(null)      // referencia al contenedor de dropdowns para detectar clics fuera

  // Cierra menú móvil y cualquier dropdown al cambiar de ruta
  useEffect(() => {
    setMenuAbierto(false) // cierra el menú hamburguesa
    setDropdown(null)     // cierra cualquier dropdown abierto
  }, [location.pathname]) // se ejecuta cada vez que cambia la ruta

  // Cierra el dropdown activo cuando el usuario hace clic fuera del área de acciones
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) { // si el clic fue fuera del contenedor
        setDropdown(null) // cierra el dropdown
      }
    }
    document.addEventListener('mousedown', handleClickOutside) // escucha clics en todo el documento
    return () => document.removeEventListener('mousedown', handleClickOutside) // limpia el listener al desmontar
  }, [])

  // Alterna el dropdown: si ya estaba abierto lo cierra, si no lo abre
  const toggleDropdown = (name) => setDropdown(prev => prev === name ? null : name)

  // Cierra todos los dropdowns (usado al seleccionar una opción)
  const cerrarDropdown = () => setDropdown(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-fondo-base/95 backdrop-blur-md border-b border-white/5"> {/* cabecera fija, fondo semitransparente con blur */}

      {/* ── BARRA SUPERIOR ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-12 py-5 flex items-center justify-between border-b border-white/5"> {/* contenedor centrado con separador inferior */}

        {/* Logo de la marca */}
        <Link to="/" className="flex items-center gap-2 text-texto-titulo font-bold tracking-tight no-underline"> {/* enlace a inicio */}
          <span className="text-xl leading-none">MUMA</span> {/* primera parte del logo */}
          <span className="text-marca-principal text-xl leading-none">BAT COMPANY</span> {/* segunda parte en color de marca */}
        </Link>

        {/* Acciones desktop — selector de idioma y los tres dropdowns */}
        <div className="hidden md:flex items-center gap-3" ref={dropdownRef}> {/* visible solo en escritorio, ref para detectar clics fuera */}

          {/* Selector de idioma — banderas clicables */}
          <div className="flex items-center gap-1" role="group" aria-label="Seleccionar idioma"> {/* grupo accesible */}
            {idiomas.map((idioma) => ( // recorre los idiomas disponibles
              <button
                key={idioma.locale} // clave única para React
                onClick={() => setLocale(idioma.locale)} // cambia el idioma al hacer clic
                title={idioma.label} // tooltip con el nombre del idioma
                aria-label={idioma.label} // accesibilidad para lectores de pantalla
                aria-pressed={locale === idioma.locale} // indica si está seleccionado
                className={[
                  'px-1.5 py-1 rounded-lg transition-all duration-200 cursor-pointer flex items-center', // base del botón
                  locale === idioma.locale
                    ? 'ring-2 ring-marca-principal/70 scale-110' // resaltado cuando es el idioma activo
                    : 'opacity-50 hover:opacity-90 hover:bg-white/5', // atenuado cuando no está activo
                ].join(' ')}
              >
                <img src={idioma.flag} alt={idioma.label} width="24" height="18" style={{ borderRadius: '3px', display: 'block' }} /> {/* bandera del idioma */}
              </button>
            ))}
          </div>

          {/* Separador visual entre idiomas y los botones de acción */}
          <div className="w-px h-6 bg-white/10" />

          {/* Dropdown UNIRSE — opciones para involucrarse con la organización */}
          <DropdownMenu
            nombre="unirse"           // identificador único del dropdown
            label="Unirse"            // texto del botón
            opciones={unirseOpciones} // array de opciones con label y to
            esActivo={dropdown === 'unirse'} // true si este dropdown está abierto
            onToggle={toggleDropdown} // función para abrir/cerrar
            onCerrar={cerrarDropdown} // función para cerrar al seleccionar
            esDestacado={false}       // no tiene el estilo verde destacado
          />

          {/* Enlace DONAR — abre directamente el cliente de correo sin dropdown */}
          <a
            href="mailto:info@murcielagosmalaga.com" // abre el cliente de correo del usuario con el destinatario prefijado
            className="flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 border border-white/10 text-texto-secundario hover:text-texto-titulo hover:border-white/30 no-underline" // estilos base: borde sutil, tipografía secundaria, hover suavizado
          >
            Donar {/* texto visible del enlace */}
          </a>

          {/* Dropdown TIENDA — opciones para adquirir productos y experiencias */}
          <DropdownMenu
            nombre="tienda"           // identificador único del dropdown
            label="Tienda"            // texto del botón
            opciones={tiendaOpciones} // array de opciones con label y to
            esActivo={dropdown === 'tienda'} // true si este dropdown está abierto
            onToggle={toggleDropdown} // función para abrir/cerrar
            onCerrar={cerrarDropdown} // función para cerrar al seleccionar
            esDestacado={true}        // usa el estilo verde destacado (botón de llamada a la acción)
          />
        </div>

        {/* Botón hamburguesa para móvil — sustituye los dropdowns en pantallas pequeñas */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)} // alterna la visibilidad del menú móvil
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 p-1" // solo visible en móvil
          aria-label={menuAbierto ? 'Cerrar menu' : 'Abrir menu'} // texto accesible según estado
          aria-expanded={menuAbierto} // indica si el menú está abierto para accesibilidad
        >
          <span className={'block w-full h-0.5 bg-texto-principal transition-all duration-300 origin-center ' + (menuAbierto ? 'rotate-45 translate-y-2' : '')} /> {/* línea superior — rota cuando abierto */}
          <span className={'block w-full h-0.5 bg-texto-principal transition-all duration-300 ' + (menuAbierto ? 'opacity-0' : '')} /> {/* línea central — se oculta cuando abierto */}
          <span className={'block w-full h-0.5 bg-texto-principal transition-all duration-300 origin-center ' + (menuAbierto ? '-rotate-45 -translate-y-2' : '')} /> {/* línea inferior — rota cuando abierto */}
        </button>
      </div>

      {/* ── BARRA INFERIOR (submenú de navegación) ───────────────────── */}
      <div className="hidden md:block"> {/* solo visible en escritorio */}
        <nav className="max-w-7xl mx-auto px-12 py-4 flex items-center justify-center gap-0.5" aria-label="Navegación principal"> {/* nav centrada */}
          {navLinks.map((link) => ( // recorre los enlaces principales
            <Link
              key={link.to} // clave única para React
              to={link.to}  // destino de la ruta
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 no-underline ${
                location.pathname === link.to
                  ? 'text-marca-principal bg-marca-principal/10' // resaltado si es la ruta activa
                  : 'text-texto-secundario hover:text-texto-titulo hover:bg-white/5' // normal en otras rutas
              }`}
            >
              {link.label} {/* texto del enlace */}
            </Link>
          ))}
        </nav>
      </div>

      {/* ── MENÚ MÓVIL ──────────────────────────────────────────────── */}
      {menuAbierto && ( // solo se renderiza cuando el menú está abierto
        <div className="md:hidden bg-fondo-secundario border-t border-white/5"> {/* panel deslizable, solo en móvil */}
          <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Menu movil"> {/* contenedor vertical */}

            {/* Rutas principales de navegación */}
            {navLinks.map((link) => ( // recorre los enlaces de la barra inferior
              <Link
                key={link.to} // clave única para React
                to={link.to}  // destino de la ruta
                className="py-3 px-4 rounded-lg text-sm font-medium text-texto-secundario hover:text-texto-titulo hover:bg-fondo-superficie transition-colors duration-200 no-underline" // estilo de enlace móvil
              >
                {link.label} {/* texto del enlace */}
              </Link>
            ))}

            {/* Sección UNIRSE en menú móvil */}
            <div className="mt-3 pt-3 border-t border-white/5 flex flex-col gap-1"> {/* separador y contenedor */}
              <p className="px-4 py-1 text-xs text-texto-secundario/50 font-semibold uppercase tracking-wider">Unirse</p> {/* título de sección */}
              <Link to="/voluntarios"       className="py-2.5 px-4 rounded-lg text-sm text-texto-secundario hover:text-texto-titulo hover:bg-fondo-superficie transition-colors no-underline">Voluntariado</Link> {/* enlace a voluntariado */}
              <Link to="/ciencia-ciudadana" className="py-2.5 px-4 rounded-lg text-sm text-texto-secundario hover:text-texto-titulo hover:bg-fondo-superficie transition-colors no-underline">Ciencia ciudadana</Link> {/* enlace a ciencia ciudadana */}
            </div>

            {/* Sección DONAR en menú móvil */}
            <div className="mt-2 flex flex-col gap-1"> {/* contenedor sin separador extra */}
              <p className="px-4 py-1 text-xs text-texto-secundario/50 font-semibold uppercase tracking-wider">Donar</p> {/* título de sección */}
              <a href="mailto:info@murcielagosmalaga.com" className="py-2.5 px-4 rounded-lg text-sm text-texto-secundario hover:text-texto-titulo hover:bg-fondo-superficie transition-colors no-underline">Apoyo a conservación</a> {/* abre cliente de correo */}
              <a href="mailto:info@murcielagosmalaga.com" className="py-2.5 px-4 rounded-lg text-sm text-texto-secundario hover:text-texto-titulo hover:bg-fondo-superficie transition-colors no-underline">Financiación de investigación</a> {/* abre cliente de correo */}
              <Link to="/servicios/refugios" className="py-2.5 px-4 rounded-lg text-sm text-texto-secundario hover:text-texto-titulo hover:bg-fondo-superficie transition-colors no-underline">Apadrinar refugios</Link> {/* enlace interno a refugios */}
            </div>

            {/* Sección TIENDA en menú móvil */}
            <div className="mt-2 flex flex-col gap-1"> {/* contenedor sin separador extra */}
              <p className="px-4 py-1 text-xs text-texto-secundario/50 font-semibold uppercase tracking-wider">Tienda</p> {/* título de sección */}
              <Link to="/servicios/refugios"          className="py-2.5 px-4 rounded-lg text-sm text-texto-secundario hover:text-texto-titulo hover:bg-fondo-superficie transition-colors no-underline">Refugios para murciélagos</Link> {/* enlace a refugios */}
              <Link to="/servicios/educacion-ambiental" className="py-2.5 px-4 rounded-lg text-sm text-texto-secundario hover:text-texto-titulo hover:bg-fondo-superficie transition-colors no-underline">Productos educativos</Link> {/* enlace a educación ambiental */}
              <Link to="/servicios/bat-night"         className="py-2.5 px-4 rounded-lg text-sm text-texto-secundario hover:text-texto-titulo hover:bg-fondo-superficie transition-colors no-underline">Experiencias</Link> {/* enlace a bat night */}
            </div>

            {/* Selector de idioma en menú móvil */}
            <div className="flex gap-2 mt-3 pt-3 border-t border-white/5 px-4"> {/* fila de banderas con separador superior */}
              {idiomas.map((idioma) => ( // recorre los idiomas disponibles
                <button
                  key={idioma.locale} // clave única para React
                  onClick={() => { setLocale(idioma.locale); setMenuAbierto(false) }} // cambia idioma y cierra el menú
                  title={idioma.label} // tooltip accesible
                  aria-pressed={locale === idioma.locale} // indica si está seleccionado
                  className={'px-2 py-1 rounded-lg transition-all duration-200 flex items-center ' + (locale === idioma.locale ? 'ring-2 ring-marca-principal/70 scale-110' : 'opacity-50 hover:opacity-90')} // resaltado si activo
                >
                  <img src={idioma.flag} alt={idioma.label} width="28" height="21" style={{ borderRadius: '3px', display: 'block' }} /> {/* bandera del idioma */}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
