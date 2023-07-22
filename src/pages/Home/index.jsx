import React from 'react';
import 'pages/Home/index.css';
import Layout from 'layout';

const Home = () => {
  return (
    <Layout>
      <div className="home-contents">
        <div className="title-container">
          <p className="home-title">가상의 존재 Ditto</p>
          <p className="home-description">
            ‘위안부’ 역사를 알리고 관객과 대화하는 AI
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
