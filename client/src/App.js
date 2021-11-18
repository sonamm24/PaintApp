import React from 'react';
import Navbar from './components/NavBar';
import './App.css';
import './SignUp.css';
import './SignIn.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Painting from './pages/Painting'

function App() {
  return (
    <Router>
      
     <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/Sign-Up"  element={<SignUp/>}/>
        <Route path="/Signin"  element={<SignIn/>}/>
        <Route path="/painting"  element={<Painting />}/>
      </Routes>
    </Router>
  );
}

export default App;
