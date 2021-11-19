import React from "react";
import './Login.scss';

export class Login extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return <div className="base-container" ref={this.props.containerRef}>
      <div className="header">Login</div>
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
            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="password" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn">Login</button>
      </div>
    </div>
  }
}