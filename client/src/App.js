import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
  Navigate,
  Link
} from 'react-router-dom';

import { toast } from "react-toastify";
import LandingPage from './components/LandingPage';
import "./components/nav-bar.css"
import "./App.css"



// import  PublicNav  from './components/NavBar/PublicNav';

// import { Navbar } from './components/NavBar/NavBar';
// import './App.css';
// import './components/About/About.css';
// import './components/NavBar/NavLogo.css';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import Painting from './components/Painting/Painting';
// import { Login } from './components/Authentication/Login';
// import { Register } from './components/Authentication/Register';
import LoginPage from './components/LoginPage';
import PrivateDashboard from './components/PrivateDashboard';
import RegisterPage from './components/RegisterPage';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean)
  };

  

  async function isAuth() {
    try {

      const response = await fetch("http://localhost:5000/auth/verify/", {
        method: "GET",
        headers: { token: localStorage.token }
      })

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false)
      
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    isAuth()
  })

  

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
