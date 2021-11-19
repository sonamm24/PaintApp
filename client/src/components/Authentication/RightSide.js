import React from "react";

export class RightSide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="right-side" ref={this.props.containerRef} onClick={this.props.onClick}>
      <div className="inner-container">
        <div className="text">{this.props.current}</div>
      </div>
    </div>
  }
}