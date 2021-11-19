import React from 'react'
import {Link} from 'react-router-dom'

export class Painting extends React.Component {

  render() {
  return (
    <div>
        <div style={{display: 'flex',justifyContent:'center',alignItems: 'center', height: '90vh'}}>
      <h1>PAINTING CANVAS</h1>
      <Link to="/painting"></Link>
    </div>
    </div>
  )
}
}
