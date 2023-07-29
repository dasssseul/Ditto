import React from 'react';
import 'pages/Home/index.css';
import Layout from 'layout';
import 예시1 from '../../asset/예시1.gif';

const Home = () => {
  return (
    <Layout>
      <div className="home-contents">
        <div className="home-title">가상의 존재 Ditto</div>
        <div className="home-description">
          ‘위안부’ 역사를 알리고 관객과 대화하는 AI
        </div>
      </div>
    </Layout>
  );
};

export default Home;
