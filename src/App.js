import logo from './logo.svg';
import { HashRouter, Route, Routes, Link } from "react-router-dom";

import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Projects from "./components/Projects"
import Experience from "./components/Experience"

function App() {
  return (
    <div className="App">
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/info" element={<Info />} />
          <Route path="/" element={<Info />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </HashRouter>
      {/* <Footer /> */}

    </div>
  );
}

export default App;
