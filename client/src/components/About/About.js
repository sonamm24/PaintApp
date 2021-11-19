import React from 'react'
import { Link } from 'react-router-dom'

export class About extends React.Component {

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
        <h1>About</h1>
        <Link to="/about"></Link>
      </div>
    )
  }
}
