import Menu1 from '../../componentes/menu1';
import Conferencia from './conferencia';
import Colaboracion from './colaboracion';
import Salidas from './salidas';
import Clases from './clases';
import Footer1 from '../../componentes/footer1';

import '../../App.css';

const Noticias = () => {
  return (
    <>
      <Menu1 /> 
      <Conferencia />
      <Colaboracion />
      <Salidas />
      <Clases />
      <Footer1 />
    </>
  );
};

export default Noticias;