import { BrowserRouter, Routes, Route } from "react-router";
import './style.css';
import Encabezado from './componentes/Encabezado';
import PieDePagina from './componentes/PieDePagina';
import Inicio from './pagina/Inicio';
import Cursos from './pagina/Cursos';
import Contacto from './pagina/Contacto';
import NoExiste from "./pagina/NoExiste";

function App() {
  return (
    <>
      <BrowserRouter>
          <Encabezado/>
          <Routes>
              <Route path="/"           element={<Inicio />} />
              <Route path="/Inicio"     element={<Inicio />} />
              <Route path="/Cursos"     element={<Cursos />} />
              <Route path="/Contacto"   element={<Contacto />} />
              <Route path="*"           element={<NoExiste />} />
          </Routes>
          <PieDePagina/>
      </BrowserRouter>
    </>
  )
}

export default App;