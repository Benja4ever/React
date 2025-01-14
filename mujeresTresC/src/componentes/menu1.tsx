import './css/nav1.css';
const Menu1 = () =>{
    return(
    
    <nav className="navbar">
        <div className="navbar-logo">
            <h2>AM3C</h2>
        </div>
        <ul className="navbar-menu">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Somos</a></li>
            <li><a href="#">Noticias</a></li>
            <li><a href="#">Actividades</a></li>
            <li><a href="#">Calendario</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        <div className="navbar-icon">
            <img src="ruta-del-icono.svg" alt="Registro" />
        </div>
    </nav>
    )
}
export default Menu1;