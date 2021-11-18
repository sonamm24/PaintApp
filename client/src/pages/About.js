import React from 'react'
import { Link } from 'react-router-dom'

 const About = () => {
  return (
    <div style={{display: 'flex',justifyContent:'center',alignItems: 'center', height: '90vh'}}>
      <h1>About</h1>
      <Link to="/about"></Link>
    </div>
  )
}

export default About
