import React, { useRef, useState, useCallback, useEffect } from 'react'
import {Link} from 'react-router-dom'

import '../../src/canvas.css'

const colors = [
  "red",
  "green",
  "yellow",
  "black",
  "blue"
]

function Painting() {
  const canvasRef = useRef(null);
  const ctx = useRef(null);


  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [mouseDown, setMouseDown] = useState(false);
  const [lastPosition, setPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
    }
    // const canvas = canvasRef.current
    // canvas.width = window.innerWidth * 2;
    // canvas.height = window.innerHeight * 2;
    // canvas.style.width = `${window.innerWidth}px`;
    // canvas.style.height = `${window.innerHeight}px`

    // const context = canvas.getContext('2d')
    // ctx.current = context
  }, []);

  //Function to draw on the canvas
  const draw = useCallback((x, y) => {
    if (mouseDown) {
      ctx.current.beginPath();
      ctx.current.strokeStyle = selectedColor;
      ctx.current.lineWidth = 10;
      ctx.current.lineJoin = 'round';
      ctx.current.moveTo(lastPosition.x, lastPosition.y);
      ctx.current.lineTo(x, y);
      ctx.current.closePath();
      ctx.current.stroke();

      setPosition({
        x,
        y
      })
    }
  }, [lastPosition, mouseDown, selectedColor, setPosition])

  const onMouseDown = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY
    })
    setMouseDown(true)
  }

  const onMouseUp = (e) => {
    setMouseDown(false)
  }

  const onMouseMove = (e) => {
    draw(e.pageX, e.pageY)
  }


  return (
    <div className="container-painting">

      <div className="painting">
  
        <canvas className="canvas"
          style={{
            border: "1px solid #000",
          }}
          width={500}
          height={500}
          ref={canvasRef}
  
          // logic for mouse movements
          onMouseDown = {onMouseDown}
          onMouseUp = {onMouseUp}
          onMouseLeave = {onMouseUp}
          onMouseMove = {onMouseMove}
        />
        </div>
        <div className="buttons">
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            {
              colors.map(
                color => <option key={color} value={color}>{color}</option>
                )
              }        
          </select>
          <button>Clear</button>
          <button>Download</button>
        </div>
            <Link to="/painting"></Link>
    </div>
  )
}

export default Painting
