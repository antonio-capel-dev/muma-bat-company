// Componente raíz — configuración de rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LangProvider } from './context/LangContext'
import Navbar from './components/navbar'
import Inicio from './pages/inicio'

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </LangProvider>
  )
}
