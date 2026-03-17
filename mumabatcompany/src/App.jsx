// Componente raíz — configuración de rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import Navbar from './components/navbar'
import Inicio from './pages/inicio'
import RealidadVirtual from './pages/servicios/realidad-virtual'
import Refugios from './pages/servicios/refugios'
import BatNight from './pages/servicios/bat-night'
import BatNightPortugal from './pages/servicios/bat-night/portugal-grutas-moeda'
import BatNightNerja from './pages/servicios/bat-night/cueva-nerja'
import BatNightPlazaMayor from './pages/servicios/bat-night/plaza-mayor-malaga'
import BatNightFuentePiedra from './pages/servicios/bat-night/fuente-de-piedra'
import EducacionAmbiental from './pages/servicios/educacion-ambiental'
import Voluntarios from './pages/voluntarios'
import Contacto from './pages/contacto'
import Nosotros from './pages/nosotros'
import CienciaCiudadana from './pages/ciencia-ciudadana' // página de ciencia ciudadana

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios/realidad-virtual" element={<RealidadVirtual />} />
          <Route path="/servicios/refugios" element={<Refugios />} />
          <Route path="/servicios/bat-night" element={<BatNight />} />
          <Route path="/servicios/educacion-ambiental" element={<EducacionAmbiental />} />
          <Route path="/servicios/bat-night/portugal-grutas-moeda" element={<BatNightPortugal />} />
          <Route path="/servicios/bat-night/cueva-nerja" element={<BatNightNerja />} />
          <Route path="/servicios/bat-night/plaza-mayor-malaga" element={<BatNightPlazaMayor />} />
          <Route path="/servicios/bat-night/fuente-de-piedra" element={<BatNightFuentePiedra />} />
          <Route path="/voluntarios" element={<Voluntarios />} />
          <Route path="/contacto" element={<Contacto />} /> {/* ruta a la página de contacto */}
          <Route path="/ciencia-ciudadana" element={<CienciaCiudadana />} /> {/* ruta a la página de ciencia ciudadana */}
        </Routes>
      </BrowserRouter>
    </LangProvider>
  )
}
