import React, { useState } from 'react';
import './css/nav1.css';

const Menu1 = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const menuItems = [
    { label: 'Inicio', submenu: [] },
    { label: 'Somos', submenu: ['Visión', 'Misión'] },
    { label: 'Noticias', submenu: ['Conferencias', 'Colaboraciones', 'Salidas', 'Clases'] },
    { label: 'Actividades', submenu: ['Yoga', 'Teatro', 'Taller Lectura', 'Pintura'] },
    { label: 'Calendario', submenu: [] },
    { label: 'Contacto', submenu: [] },
  ];

  return (
    <nav className="navbar">
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
            <a href="#">{item.label}</a>
            {activeMenu === item.label && item.submenu.length > 0 && (
              <ul className="dropdown-menu">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="dropdown-item">
                    <a href="#">{subItem}</a>
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