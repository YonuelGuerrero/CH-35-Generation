
import './App.css'
import Inicio from './components/Inicio'
import Contacto from './components/Contacto'
import Nosotros from './components/SobreNosotros'
import { Routes, Route } from 'react-router-dom'

// - Routes. Actúa como contenedor padre de todas las rutas individuales que se crearán en la aplicación
/* - Route. Es la ruta 'hija' de cada componente. Recibe dos atributos
    1. path: especifica la ruta (URL) a seguir
    2. element: especifica el componente que se renderiza 
*/

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="Nosotros" element={<Nosotros/>} />
      <Route path="Contacto" element={<Contacto/>} />
    </Routes>
    </>
  )
}

export default App
