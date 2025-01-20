import Menu1 from '../../componentes/menu1';
import Footer1 from '../../componentes/footer1'; 
import '../../componentes/css/nav2.css'; 
import '../../componentes/css/footer1.css';
import '../../App.css';

const Contacto = () => {
  return (
    <>
      <Menu1 /> {/* Menú alternativo para esta página */}
      <div className="contact-content">
        <h1>Página de Contacto</h1>
        <p>¡Gracias por visitarnos! Aquí puedes encontrar nuestras formas de contacto.</p>
      </div>
      <Footer1 />
    </>
  );
};

export default Contacto;
