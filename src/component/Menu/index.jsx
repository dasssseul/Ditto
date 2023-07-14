import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { HiDocumentSearch, HiChartBar, HiChat, HiHome } from 'react-icons/hi';

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="logo">Ditto</div>
      <div className="gnb-menus">
        <NavLink
          to="/"
          className={(({ isActive }) => isActive && 'active', 'link')}
        >
          <button className="gnb-menu">
            <HiHome color="white" size={20} />
            <span>Home</span>
          </button>
        </NavLink>
        <NavLink
          to="/about"
          className={(({ isActive }) => isActive && 'active', 'link')}
        >
          <button className="gnb-menu">
            <HiDocumentSearch color="white" size={20} />
            <span>About</span>
          </button>
        </NavLink>
        <NavLink
          to="/analysis"
          className={(({ isActive }) => isActive && 'active', 'link')}
        >
          <button className="gnb-menu">
            <HiChartBar color="white" size={20} />
            <span>Analysis</span>
          </button>
        </NavLink>
        <NavLink
          to="/talk"
          className={(({ isActive }) => isActive && 'active', 'link')}
        >
          <button className="gnb-menu">
            <HiChat color="white" size={20} />
            <span>Talk</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
