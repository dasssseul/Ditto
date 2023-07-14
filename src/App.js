import About from 'pages/About';
import Analysis from 'pages/Analysis';
import Home from 'pages/Home';
import Talk from 'pages/Talk';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="contents">
      <div className="layout">
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/about" element={<About />} />
          <Route path="/talk" element={<Talk />} />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
