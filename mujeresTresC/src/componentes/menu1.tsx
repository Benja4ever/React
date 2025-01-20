import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Usamos useLocation para saber en qué página estamos
import './css/nav2.css';

const Menu1 = () => {
  const [activeMenu, setActiveMenu] = useState(null); // Controlar el submenú activo
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation(); // Usamos useLocation para obtener la ubicación actual

  // Manejador para cuando el ratón entra en un ítem del menú
  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  // Manejador para cuando el ratón sale del ítem del menú
  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  // Manejador de scroll para cambiar el color de fondo
  const handleScroll = () => {
    if (window.scrollY > 50) { // Cuando se haya desplazado más de 50px hacia abajo
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Asegurarnos de que se limpie el submenú cuando regrese a la página de inicio
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Usamos useEffect para resetear el estado de activeMenu cada vez que el path cambie
  useEffect(() => {
    if (location.pathname === '/') { // Si estamos en la página de inicio
      setActiveMenu(null); // Restablecemos el estado de activeMenu
    }
  }, [location.pathname]);

  const menuItems = [
    { label: 'Inicio', link: '/' },
    { 
      label: 'Somos',
      link: '/somos',
      submenu: [
        { label: 'Visión', link: '/somos#vision' },
        { label: 'Misión', link: '/somos#mision' },
      ],
    },
    { 
      label: 'Noticias',
      link: '/noticias',
      submenu: [
        { label: 'Conferencias', link: '/noticias#conferencia' },
        { label: 'Colaboraciones', link: '/noticias#colaboracion' },
        { label: 'Salidas', link: '/noticias#salidas' },
        { label: 'Clases', link: '/noticias#clases' },
      ],
    },
    { 
      label: 'Actividades',
      link: '/actividades',
      submenu: [
        { label: 'Yoga', link: '/actividades#yoga' },
        { label: 'Teatro', link: '/actividades#teatro' },
        { label: 'Taller Lectura', link: '/actividades#tallerLectura' },
        { label: 'Pintura', link: '/actividades#pintura' },
      ],
    },
    { label: 'Calendario', link: '/calendario' },
    { label: 'Contacto', link: '/contacto' },
  ];

  return (
    <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <h2>AM3C</h2>
      </div>
      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
            className="navbar-item"
          >
            <Link to={item.link}>{item.label}</Link>

            {/* Si el submenú está activo, mostrarlo */}
            {activeMenu === item.label && item.submenu && item.submenu.length > 0 && (
              <ul className="dropdown-menu">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="dropdown-item">
                    <Link to={subItem.link}>{subItem.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="navbar-icon">
        <img src="ruta-del-icono.svg" alt="Registro" />
      </div>
    </nav>
  );
};

export default Menu1;
