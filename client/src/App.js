import { React } from 'react';
import { Navbar } from './components/NavBar/NavBar';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Painting } from './components/Painting/Painting'
import { Login } from './components/Authentication/Login';
import { Register } from './components/Authentication/Register';

function App() {
  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/painting" element={<Painting />} />
      </Routes>
    </Router>
  );
}

export default App;
