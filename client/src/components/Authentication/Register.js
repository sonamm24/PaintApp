import React from "react";
import './SignUp.css';
import { Link } from "react-router-dom";

export class Register extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return <div className="base-container"ref={this.props.containerRef}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img
            alt=""
            className="pic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkovC9a5Je29Pg-DaKoC5fPi8s2JAdD5wNqx1esDO7uEv4r9LFFAl1Xu-IZKZYBRMqBz4&usqp=CAU"
          />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>
        </div>
      </div>
      
      <div className="footer">
      <Link to="/">
        <button type="button" className="btn">Register</button>
        </Link>
      </div>
    </div>
  }
}