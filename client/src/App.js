import { React } from 'react';
import { Navbar } from './components/NavBar/NavBar';
import './App.css';
import './components/About/About.css';
import './components/NavBar/NavLogo.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import Painting from './components/Painting/Painting';
import { Login } from './components/Authentication/Login';
import { Register } from './components/Authentication/Register';

function App() {
  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/PaintApp/" exact element={<Home />} />
        <Route path="/PaintApp/about" element={<About />} />
        <Route path="/PaintApp/login" element={<Login />} />
        <Route path="/PaintApp/register" element={<Register />} />
        <Route path="/PaintApp/painting" element={<Painting />} />
      </Routes>
    </Router>
  );
}

export default App;
