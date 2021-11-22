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

  

  // async function isAuth() {
  //   try {

  //     const response = await fetch("http://localhost:5000/auth/verify/", {
  //       method: "GET",
  //       headers: { token: localStorage.token }
  //     })

  //     const parseRes = await response.json();

  //     parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false)
      
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // }

  // useEffect(() => {
  //   isAuth()
  // })

  

  return (
    
    <Fragment>

      <Router>
        {isAuthenticated ? (
          <PrivateDashboard setAuth={setAuth} />

        ) : (
        
          <LandingPage />
      

        )}
        <div>
        <Routes>
          <Route 
            exact 
            path="/login" 
            element={ !isAuthenticated ? (<LoginPage setAuth={setAuth}/>) : (<Navigate to="/" />)} 
            />
          <Route 
            exact
            path="/" 
            element={ <Home />} 
            />
          <Route 
            exact 
            path="/register" 
            element={ !isAuthenticated ? (<RegisterPage setAuth={setAuth}/>) : (<Navigate to="/" />)} 
            />
          <Route path="/painting" 
          exact element={isAuthenticated ?  (<Painting />) : (<Navigate to="/"/>)}
            />
          {/* <Route 
            exact 
            path="/landing-page" 
            element={ !isAuthenticated ? (<LandingPage setAuth={setAuth}/>) : (<Navigate to="/member-dashboard" />)} 
            />
          <Route 
            exact 
            path="/member-dashboard" 
            element={ isAuthenticated ? (<PrivateDashboard setAuth={setAuth}/>) : (<Navigate to="/landing-page" />)} 
            />  */}

          </Routes>
        {/* <Routes>
          <Route 
            exact 
            path="/login" 
            element={ !isAuthenticated ? (<LoginPage setAuth={setAuth}/>) : (<Navigate to="/member-dashboard" />)} 
            />
          <Route 
            exact
            path="/" 
            element={ !isAuthenticated ? (<LandingPage setAuth={setAuth}/>) : (<Navigate to="/member-dashboard" />)} 
            />
          <Route 
            exact 
            path="/register" 
            element={ !isAuthenticated ? (<RegisterPage setAuth={setAuth}/>) : (<Navigate to="/member-dashboard" />)} 
            />
          <Route path="/painting" 
          exact element={isAuthenticated ?  (<Painting />) : (<Navigate to="/landing-page"/>)}
            />
          <Route 
            exact 
            path="/landing-page" 
            element={ !isAuthenticated ? (<LandingPage setAuth={setAuth}/>) : (<Navigate to="/member-dashboard" />)} 
            />
          <Route 
            exact 
            path="/member-dashboard" 
            element={ isAuthenticated ? (<PrivateDashboard setAuth={setAuth}/>) : (<Navigate to="/landing-page" />)} 
            /> 

          </Routes> */}
        </div>
      </Router>

    </Fragment>




);
}

export default App;

// <Router>
//   <Navbar />
//   <Routes>
//     <Route path="/" exact element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/login" render={props => !isAuthenticated ? (<Login {...props} />) : <Navigate to="/register" /> } />
//     <Route path="/register" element={<Register />} />
//     <Route path="/painting" exact element={<Painting />}/>
//   </Routes>
// </Router>