// Navbar principal — oscura premium, fija en la parte superior
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LangContext'

const enlacesNav = {
  es: [
    { etiqueta: 'Servicios',         to: '/servicios/refugios' },
    { etiqueta: 'Museo Virtual',     to: '/servicios/realidad-virtual' },
    { etiqueta: 'Proyectos',         href: '#proyectos' },
    { etiqueta: 'Como trabajamos',   href: '#como-trabajamos' },
  ],
  en: [
    { etiqueta: 'Services',          to: '/servicios/refugios' },
    { etiqueta: 'Virtual Museum',    to: '/servicios/realidad-virtual' },
    { etiqueta: 'Projects',          href: '#proyectos' },
    { etiqueta: 'How we work',       href: '#como-trabajamos' },
  ],
  de: [
    { etiqueta: 'Leistungen',        to: '/servicios/refugios' },
    { etiqueta: 'Virtuelles Museum', to: '/servicios/realidad-virtual' },
    { etiqueta: 'Projekte',          href: '#proyectos' },
    { etiqueta: 'Wie wir arbeiten',  href: '#como-trabajamos' },
  ],
}

const ctaLabel = { es: 'Contactar', en: 'Contact', de: 'Kontakt' }

const idiomas = [
  { locale: 'es', flag: '/flags/es.svg', label: 'Español' },
  { locale: 'en', flag: '/flags/gb.svg', label: 'English' },
  { locale: 'de', flag: '/flags/de.svg', label: 'Deutsch' },
]

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const { locale, setLocale } = useLang()
  const enlaces = enlacesNav[locale] || enlacesNav.es
  const location = useLocation()

  // Cierra el menú móvil cuando cambia la ruta (evita race condition con React 19)
  useEffect(() => {
    setMenuAbierto(false)
  }, [location.pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-fondo-base/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2 text-texto-titulo font-bold tracking-tight no-underline">
          <span className="text-lg leading-none">MUMA</span>
          <span className="text-marca-principal text-lg leading-none">BAT COMPANY</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegacion principal">
          {enlaces.map((enlace) =>
            enlace.to ? (
              <Link key={enlace.to + enlace.etiqueta} to={enlace.to} className="text-sm font-medium text-texto-secundario hover:text-texto-titulo transition-colors duration-200 no-underline">
                {enlace.etiqueta}
              </Link>
            ) : (
              <a key={enlace.href + enlace.etiqueta} href={enlace.href} className="text-sm font-medium text-texto-secundario hover:text-texto-titulo transition-colors duration-200 no-underline">
                {enlace.etiqueta}
              </a>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
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
          <a href="#contacto" className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 no-underline">
            {ctaLabel[locale]}
          </a>
        </div>

        <button onClick={() => setMenuAbierto(!menuAbierto)} className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 p-1" aria-label={menuAbierto ? 'Cerrar menu' : 'Abrir menu'} aria-expanded={menuAbierto}>
          <span className={'block w-full h-0.5 bg-texto-principal transition-all duration-300 origin-center ' + (menuAbierto ? 'rotate-45 translate-y-2' : '')} />
          <span className={'block w-full h-0.5 bg-texto-principal transition-all duration-300 ' + (menuAbierto ? 'opacity-0' : '')} />
          <span className={'block w-full h-0.5 bg-texto-principal transition-all duration-300 origin-center ' + (menuAbierto ? '-rotate-45 -translate-y-2' : '')} />
        </button>
      </div>

      {menuAbierto && (
        <div className="md:hidden bg-fondo-secundario border-t border-white/5">
          <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Menu movil">
            {enlaces.map((enlace) =>
              enlace.to ? (
                <Link key={enlace.to + enlace.etiqueta} to={enlace.to} className="py-3 px-4 rounded-lg text-sm font-medium text-texto-secundario hover:text-texto-titulo hover:bg-fondo-superficie transition-colors duration-200 no-underline">
                  {enlace.etiqueta}
                </Link>
              ) : (
                <a key={enlace.href + enlace.etiqueta} href={enlace.href} onClick={() => setMenuAbierto(false)} className="py-3 px-4 rounded-lg text-sm font-medium text-texto-secundario hover:text-texto-titulo hover:bg-fondo-superficie transition-colors duration-200 no-underline">
                  {enlace.etiqueta}
                </a>
              )
            )}
            <div className="flex gap-2 mt-3 pt-3 border-t border-white/5 px-4">
              {idiomas.map((idioma) => (
                <button key={idioma.locale} onClick={() => { setLocale(idioma.locale); setMenuAbierto(false) }} title={idioma.label} aria-pressed={locale === idioma.locale} className={'px-2 py-1 rounded-lg transition-all duration-200 flex items-center ' + (locale === idioma.locale ? 'ring-2 ring-marca-principal/70 scale-110' : 'opacity-50 hover:opacity-90')}>
                  <img src={idioma.flag} alt={idioma.label} width="28" height="21" style={{ borderRadius: '3px', display: 'block' }} />
                </button>
              ))}
            </div>
            <div className="mt-2">
              <a href="#contacto" onClick={() => setMenuAbierto(false)} className="block w-full text-center py-3 px-4 rounded-xl text-sm font-semibold bg-marca-principal text-texto-sobre-accion hover:bg-marca-principal-hover transition-colors duration-200 no-underline">
                {ctaLabel[locale]}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
