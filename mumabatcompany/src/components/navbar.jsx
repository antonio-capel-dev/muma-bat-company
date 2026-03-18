// Navbar principal — dos barras, oscura premium, fija en la parte superior
import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LangContext'

const idiomas = [
  { locale: 'es', flag: '/flags/es.svg', label: 'Español' },
  { locale: 'en', flag: '/flags/gb.svg', label: 'English' },
  { locale: 'de', flag: '/flags/de.svg', label: 'Deutsch' },
]

const navLinks = [
  { label: 'Home',           to: '/' },
  { label: 'MUMA',             to: '/nosotros' },
  { label: 'Realidad Virtual', to: '/servicios/realidad-virtual' },
  { label: 'Bat Night',        to: '/servicios/bat-night' },
  { label: 'Refugios',         to: '/servicios/refugios' },
  { label: 'Formación',        to: '/servicios/formacion' },
  { label: 'Contacto',         to: '/contacto' },
]

const ChevronIcon = ({ open }) => (
  <svg
    className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

export default function Navbar() {
  const [menuAbierto, setMenuAbierto]   = useState(false)
  const [dropdown, setDropdown]         = useState(null) // 'unirse' | 'tienda' | null
  const { locale, setLocale }           = useLang()
  const location                        = useLocation()
  const dropdownRef                     = useRef(null)

  // Cierra menú móvil y dropdowns al cambiar de ruta
  useEffect(() => {
    setMenuAbierto(false)
    setDropdown(null)
  }, [location.pathname])

  // Cierra dropdowns al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleDropdown = (name) => setDropdown(prev => prev === name ? null : name)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-fondo-base/95 backdrop-blur-md border-b border-white/5">

      {/* ── BARRA SUPERIOR ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-12 py-5 flex items-center justify-between border-b border-white/5">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-texto-titulo font-bold tracking-tight no-underline">
          <span className="text-xl leading-none">MUMA</span>
          <span className="text-marca-principal text-xl leading-none">BAT COMPANY</span>
        </Link>

        {/* Acciones desktop */}
        <div className="hidden md:flex items-center gap-3" ref={dropdownRef}>

          {/* Selector de idioma */}
          <div className="flex items-center gap-1" role="group" aria-label="Seleccionar idioma">
            {idiomas.map((idioma) => (
              <button
                key={idioma.locale}
                onClick={() => setLocale(idioma.locale)}
                title={idioma.label}
                aria-label={idioma.label}
                aria-pressed={locale === idioma.locale}
                className={[
                  'px-1.5 py-1 rounded-lg transition-all duration-200 cursor-pointer flex items-center',
                  locale === idioma.locale
                    ? 'ring-2 ring-marca-principal/70 scale-110'
                    : 'opacity-50 hover:opacity-90 hover:bg-white/5',
                ].join(' ')}
              >
                <img src={idioma.flag} alt={idioma.label} width="24" height="18" style={{ borderRadius: '3px', display: 'block' }} />
              </button>
            ))}
          </div>

          {/* Separador */}
          <div className="w-px h-6 bg-white/10" />

          {/* Dropdown: Unirse */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('unirse')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border transition-colors duration-200 cursor-pointer ${
                dropdown === 'unirse'
                  ? 'bg-marca-principal/10 border-marca-principal text-marca-principal'
                  : 'border-white/10 text-texto-secundario hover:text-texto-titulo hover:border-white/30'
              }`}
            >
              Unirse
              <ChevronIcon open={dropdown === 'unirse'} />
            </button>
            {dropdown === 'unirse' && (
              <div className="absolute right-0 top-full mt-2 w-52 bg-fondo-secundario border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
                <Link
                  to="/voluntarios"
                  onClick={() => setDropdown(null)}
                  className="block px-4 py-3 text-sm text-texto-secundario hover:text-texto-titulo hover:bg-white/5 transition-colors no-underline"
                >
                  Voluntarios
                </Link>
                <Link
                  to="/unirse/ciencia-ciudadana"
                  onClick={() => setDropdown(null)}
                  className="block px-4 py-3 text-sm text-texto-secundario hover:text-texto-titulo hover:bg-white/5 transition-colors no-underline"
                >
                  Ciencia ciudadana
                </Link>
              </div>
            )}
          </div>

          {/* Donar */}
          <Link
            to="/donar"
            className="px-4 py-2 rounded-lg text-sm font-semibold border border-white/10 text-texto-secundario hover:text-texto-titulo hover:border-white/30 transition-colors duration-200 no-underline"
          >
            Donar
          </Link>

          {/* Dropdown: Tienda */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('tienda')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 cursor-pointer"
            >
              Tienda
              <ChevronIcon open={dropdown === 'tienda'} />
            </button>
            {dropdown === 'tienda' && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-fondo-secundario border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
                <Link
                  to="/servicios/refugios"
                  onClick={() => setDropdown(null)}
                  className="block px-4 py-3 text-sm text-texto-secundario hover:text-texto-titulo hover:bg-white/5 transition-colors no-underline"
                >
                  Refugios para murciélagos
                </Link>
                <Link
                  to="/servicios/realidad-virtual"
                  onClick={() => setDropdown(null)}
                  className="block px-4 py-3 text-sm text-texto-secundario hover:text-texto-titulo hover:bg-white/5 transition-colors no-underline"
                >
                  Experiencia VR
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Hamburguesa móvil */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 p-1"
          aria-label={menuAbierto ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={menuAbierto}
        >
          <span className={'block w-full h-0.5 bg-texto-principal transition-all duration-300 origin-center ' + (menuAbierto ? 'rotate-45 translate-y-2' : '')} />
          <span className={'block w-full h-0.5 bg-texto-principal transition-all duration-300 ' + (menuAbierto ? 'opacity-0' : '')} />
          <span className={'block w-full h-0.5 bg-texto-principal transition-all duration-300 origin-center ' + (menuAbierto ? '-rotate-45 -translate-y-2' : '')} />
        </button>
      </div>

      {/* ── BARRA INFERIOR (submenú de navegación) ───────────────────── */}
      <div className="hidden md:block">
        <nav className="max-w-7xl mx-auto px-12 py-4 flex items-center justify-center gap-0.5" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 no-underline ${
                location.pathname === link.to
                  ? 'text-marca-principal bg-marca-principal/10'
                  : 'text-texto-secundario hover:text-texto-titulo hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* ── MENÚ MÓVIL ──────────────────────────────────────────────── */}
      {menuAbierto && (
        <div className="md:hidden bg-fondo-secundario border-t border-white/5">
          <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Menu movil">

            {/* Rutas principales */}
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="py-3 px-4 rounded-lg text-sm font-medium text-texto-secundario hover:text-texto-titulo hover:bg-fondo-superficie transition-colors duration-200 no-underline"
              >
                {link.label}
              </Link>
            ))}

            {/* Acciones secundarias */}
            <div className="mt-3 pt-3 border-t border-white/5 flex flex-col gap-1">
              <p className="px-4 py-1 text-xs text-texto-secundario/50 font-semibold uppercase tracking-wider">Unirse</p>
              <Link to="/voluntarios"      className="py-2.5 px-4 rounded-lg text-sm text-texto-secundario hover:text-texto-titulo hover:bg-fondo-superficie transition-colors no-underline">Voluntarios</Link>
              <Link to="/unirse/ciencia-ciudadana" className="py-2.5 px-4 rounded-lg text-sm text-texto-secundario hover:text-texto-titulo hover:bg-fondo-superficie transition-colors no-underline">Ciencia ciudadana</Link>

              <p className="px-4 py-1 mt-2 text-xs text-texto-secundario/50 font-semibold uppercase tracking-wider">Tienda</p>
              <Link to="/servicios/refugios"        className="py-2.5 px-4 rounded-lg text-sm text-texto-secundario hover:text-texto-titulo hover:bg-fondo-superficie transition-colors no-underline">Refugios para murciélagos</Link>
              <Link to="/servicios/realidad-virtual" className="py-2.5 px-4 rounded-lg text-sm text-texto-secundario hover:text-texto-titulo hover:bg-fondo-superficie transition-colors no-underline">Experiencia VR</Link>

              <Link
                to="/donar"
                className="mt-2 block text-center py-3 px-4 rounded-xl text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 no-underline"
              >
                Donar
              </Link>
            </div>

            {/* Idiomas */}
            <div className="flex gap-2 mt-3 pt-3 border-t border-white/5 px-4">
              {idiomas.map((idioma) => (
                <button
                  key={idioma.locale}
                  onClick={() => { setLocale(idioma.locale); setMenuAbierto(false) }}
                  title={idioma.label}
                  aria-pressed={locale === idioma.locale}
                  className={'px-2 py-1 rounded-lg transition-all duration-200 flex items-center ' + (locale === idioma.locale ? 'ring-2 ring-marca-principal/70 scale-110' : 'opacity-50 hover:opacity-90')}
                >
                  <img src={idioma.flag} alt={idioma.label} width="28" height="21" style={{ borderRadius: '3px', display: 'block' }} />
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
