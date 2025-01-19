import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu1 from './componentes/menu1';
import Header1 from './componentes/header1';
import Section1 from './componentes/section1';
import Section2 from './componentes/section2';
import Section3 from './componentes/section3';
import Section4 from './componentes/section4';
import Section5 from './componentes/seccion5';
import Footer1 from './componentes/footer1';
import Contacto from './paginas/contacto/contacto';
import Somos from './paginas/somos/somos';
import Noticias from './paginas/noticias/noticias';
import Actividades from './paginas/actividades/actividades';
import Calendario from './paginas/calendario/calendario';

import './App.css';

function App() {
  return (
    <Router>
      <Menu1 />
      <Routes>
        {/* Ruta para la página principal */}
        <Route
          path="/"
          element={
            <>
              <Header1 />
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
              <Footer1 />
            </>
          }
        />
        {/* Ruta para la página de contacto */}
        <Route path="/somos" element={<Somos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/Calendario" element={<Calendario />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
