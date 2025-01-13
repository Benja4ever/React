import './css/nav1.css';
const Menu1 = () =>{
    return(
    
    <nav className="navbar">
        <div className="navbar-logo">
            <h2>Nombre de la Página</h2>
        </div>
        <ul className="navbar-menu">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Proyectos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        <div className="navbar-icon">
            <img src="ruta-del-icono.svg" alt="Registro" />
        </div>
    </nav>
    )
}
export default Menu1;