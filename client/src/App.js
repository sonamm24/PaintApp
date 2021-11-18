import React from 'react';
import Navbar from './components/NavBar';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      
     <Navbar/>
     <Routes>
     <Route path= '/' exact element={<Home/>} />
     </Routes>
     <Login />
    </Router>
  );
}

export default App;
