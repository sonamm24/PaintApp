import React from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { RightSide } from "./RightSide";

export class LoginFun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    }
  }
  changeState() {
    const { isLogginActive } = this.state;
    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    }
    this.setState((prevState) => ({ isLogginActive: !prevState.isLoggingActive }))
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container">
            {isLogginActive && <Login containerRef={(ref) => this.current = ref} />}
            {!isLogginActive && <Register containerRef={(ref) => this.current = ref} />}
          </div>
          {/* <RightSide current={current} containerRef={ref => this.rightSide = ref} onClick={this.changeState.bind(this)} /> */}

        </div>
      </div>
    )
  }
}

