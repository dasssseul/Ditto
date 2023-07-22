import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { HiDocumentSearch, HiChartBar, HiChat, HiHome } from 'react-icons/hi';
import { Tooltip } from 'react-tooltip';

const Menu = () => {
  return (
    <div className="menu-container">
      <NavLink to="/" className="link">
        <div className="logo">Ditto</div>
      </NavLink>
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
          to="/talk"
          className={(({ isActive }) => isActive && 'active', 'link')}
          data-tooltip-id="talk"
          data-tooltip-content="Ditto와 대화를 나눕니다."
        >
          <button className="gnb-menu">
            <HiChat color="white" size={20} />

            <span>Talk</span>
          </button>
        </NavLink>
        <Tooltip id="talk" />
        <NavLink
          to="/analysis"
          className={(({ isActive }) => isActive && 'active', 'link')}
          data-tooltip-id="analysis"
          data-tooltip-content="Ditto를 통해 수집된 대화를 분석합니다."
        >
          <button className="gnb-menu">
            <HiChartBar color="white" size={20} />
            <span>Analysis</span>
          </button>
        </NavLink>
        <Tooltip id="analysis" />
        <NavLink
          to="/about"
          className={(({ isActive }) => isActive && 'active', 'link')}
          data-tooltip-id="about"
          data-tooltip-content="위안부 역사와 Ditto에 대해 설명합니다."
        >
          <button className="gnb-menu">
            <HiDocumentSearch color="white" size={20} />
            <span>About</span>
          </button>
        </NavLink>
        <Tooltip id="about" />
      </div>
    </div>
  );
};

export default Menu;
