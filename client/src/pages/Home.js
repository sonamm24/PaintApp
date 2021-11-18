import React from 'react'
import { Link } from 'react-router-dom'

 function Home  () {
  return (
    <div style={{display: 'flex',justifyContent:'center',alignItems: 'center', height: '120'}}>
      
      <Link to="/"></Link>
      <div className="parallax">
        <img
          alt=""
          className="image-1"
          src="https://www.color-meanings.com/wp-content/uploads/woman-painting-watercolor-floral-design-canvas.jpeg"
        />
        </div>
      
    </div>
    
  )
}

export default Home;
