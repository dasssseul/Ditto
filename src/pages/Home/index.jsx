import React from 'react';
import 'pages/Home/index.css';
import { Link } from 'react-router-dom';
import { HiDocumentSearch, HiChartBar, HiChat } from 'react-icons/hi';

const MENUS = [
  {
    title: 'About',
    description: '위안부 역사와 Ditto에 대해 설명합니다.',
    icon: <HiDocumentSearch color="#F1AE0D" size={60} />,
    to: '/about',
  },
  {
    title: 'Analysis',
    description: 'Ditto를 통해 수집된 대화를 분석합니다.',
    icon: <HiChartBar color="#F1AE0D" size={60} />,
    to: '/analysis',
  },
  {
    title: 'Talk',
    description: 'Ditto를 통해 수집된 대화를 분석합니다.',
    icon: <HiChat color="#F1AE0D" size={60} />,
    to: '/talk',
  },
];

const Home = () => {
  return (
    <div className="home-contents">
      <div className="title-container">
        <p className="home-title">가상의 존재 Ditto</p>
        <p className="home-description">
          ‘위안부’ 역사를 알리고 관객과 대화하는 AI
        </p>
      </div>
      <div className="menus">
        {MENUS.map(({ title, description, icon, to }) => (
          <div className="menu" key={title}>
            <div className="header">
              <span className="menu-title">{title}</span>
              {icon}
            </div>
            <div className="menu-description">
              <span>{description}</span>
            </div>
            <div>
              <Link to={to}>
                <button className="button">MORE</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
