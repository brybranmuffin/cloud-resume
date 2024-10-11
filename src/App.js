import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <Routes>
          <Route path="/info" element={<Info />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}

    </div>
  );
}

export default App;
