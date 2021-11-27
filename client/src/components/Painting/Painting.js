import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './canvas.css'

const colors = [
  {
    name: "select a color",
    ref: "#000000"
  },
  {
    name: "red",
    ref: "#D92C20"
  },
  {
    name: "pink",
    ref: "#F789A7"
  },
  {
    name: "orange",
    ref: "#FC813E"
  },
  {
    name: "yellow",
    ref: "#F5D56A"
  },
  {
    name: "green",
    ref: "#4CAF50"
  },
  {
    name: "blue",
    ref: "#12BFEC"
  },
  {
    name: "purple",
    ref: "#7A55BD"
  },
  {
    name: "black",
    ref: "#000000"
  }
]

const lineWidth = [
  {
    name: "select size",
    value: 1
  },
  {
    name: "x-small",
    value: 1
  },
  {
    name: "small",
    value: 3
  },
  {
    name: "medium",
    value: 7
  },
  {
    name: "large",
    value: 10
  },
  {
    name: "x-large",
    value: 15
  }
]

export class Painting extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedColor: colors[0],
      selectedSize: lineWidth[0],
      isDrawing: false
    }

    this.canvasRef = React.createRef(null);
    this.contextRef = React.createRef(null);
  }

  componentDidMount() {
    this.canvasSetup();
  }

  canvasSetup() {
    const canvas = this.canvasRef.current;
    canvas.width = 600 * 2;
    canvas.height = 600 * 2;
    canvas.style.width = '600px';
    canvas.style.height = '600px';
    canvas.style.border = "2px solid #000";

    const context = canvas.getContext('2d');
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = this.state.selectedColor;
    context.lineWidth = this.state.selectedSize;
    this.contextRef.current = context;
  }

  setSelectedColor(colorVal) {
    this.setState({
      selectedColor: colorVal
    });
  }

  setSelectedSize(sizeVal) {
    this.setState({
      selectedSize: sizeVal
    });
  }

  setIsDrawing(drawStatus) {
    this.setState({
      isDrawing: drawStatus
    });
  }

  download = async () => {
    const image = this.canvasRef.current.toDataURL('image/png');
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = "image.png";
    link.click();
  }

  clear = () => {
    this.contextRef.current.clearRect(
      0, 0, this.contextRef.current.canvas.width,
      this.contextRef.current.canvas.height);
  }

  startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    this.contextRef.current.beginPath();
    this.contextRef.current.moveTo(offsetX, offsetY);
    this.setIsDrawing(true);
  }

  finishDrawing = () => {
    this.contextRef.current.closePath();
    this.setIsDrawing(false);
  }

  draw = ({ nativeEvent }) => {
    if (!this.state.isDrawing) {
      return
    }
    const { offsetX, offsetY } = nativeEvent;
    this.contextRef.current.lineTo(offsetX, offsetY)
    this.contextRef.current.strokeStyle = this.state.selectedColor;
    this.contextRef.current.lineWidth = this.state.selectedSize;
    this.contextRef.current.stroke();
  }

  render() {
    return (
      <div className="container-painting">

        <div className="painting">

          <canvas className="canvas"
            onMouseDown={this.startDrawing}
            onMouseUp={this.finishDrawing}
            onMouseMove={this.draw}
            ref={this.canvasRef}
          />
        </div>
        <div className="buttons-painting">
          <select
            className="btn-paint"
            value={this.state.selectedColor}
            onChange={(e) => this.setSelectedColor(e.target.value)}
          >
            {
              colors.map(
                color => <option key={color.name} value={color.ref}>{color.name}</option>
              )
            }
          </select>
          &nbsp;
          &nbsp;
          <select
            className="btn-paint"
            value={this.state.selectedSize}
            onChange={(e) => this.setSelectedSize(e.target.value)}
          >
            {
              lineWidth.map(
                size => <option key={size.name} value={size.value}>{size.name}</option>
              )
            }
          </select>
          &nbsp;
          &nbsp;
          <button className="btn-paint" onClick={this.clear}>Clear</button>
          &nbsp;
          &nbsp;
          <button className="btn-paint" onClick={this.download}>Download</button>
        </div>
        <Link to="/painting"></Link>
      </div>
    )
  }
}

