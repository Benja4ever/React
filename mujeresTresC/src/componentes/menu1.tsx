import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/nav2.css';

const Menu1 = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolling, setScrolling] = useState(false);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) { // Cuando se haya desplazado más de 50px hacia abajo
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { label: 'Inicio', link: '/' },
    { label: 'Calendario', link: '/calendario' },
    { 
      label: 'Somos', 
      submenu: [
        { label: 'Visión', link: '/somos#vision' },
        { label: 'Misión', link: '/somos#mision' }
      ] 
    },
    { 
      label: 'Noticias', 
      submenu: [
        { label: 'Conferencias', link: '/noticias#conferencia' },
        { label: 'Colaboraciones', link: '/noticias#colaboracion' },
        { label: 'Salidas', link: '/noticias#salidas' },
        { label: 'Clases', link: '/noticias#clases' }
      ] 
    },
    { 
      label: 'Actividades', 
      submenu: [
        { label: 'Yoga', link: '/actividades#yoga' },
        { label: 'Teatro', link: '/actividades#teatro' },
        { label: 'Taller Lectura', link: '/actividades#tallerLectura' },
        { label: 'Pintura', link: '/actividades#pintura' }
      ] 
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
