import React, { Component } from "react";

class R025_SetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
    };
  }

  StateChange = (flag) => {
    if (flag === "direct") this.stateStateString = "리액트";
    if (flag === "setState") this.setState({ StateString: "리액트" });
  };

  render() {
    return (
      <div style={{ padding: "0px" }}>
        <button onClick={(e) => this.StateChange("direct", e)}>
          state 직접 변경
        </button>
        <button onClick={(e) => this.StateChange("setstate", e)}>
          setState로 변경
        </button>
      </div>
    );
  }
}

R025_SetState.defaultProps = {
  ReactString: "리액트",
  R0eactNumber: 400,
};

export default R025_SetState;
