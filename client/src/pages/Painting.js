import React from 'react'
import {Link} from 'react-router-dom'

function Painting() {
  return (
    <div>
        <div style={{display: 'flex',justifyContent:'center',alignItems: 'center', height: '90vh'}}>
      <h1>PAINTING CANVAS</h1>
      <Link to="/painting"></Link>
    </div>
    </div>
  )
}

export default Painting
