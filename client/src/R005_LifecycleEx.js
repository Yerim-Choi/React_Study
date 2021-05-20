import React, { Component } from "react";

class R005_LifecycleEx extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. construcor Call");
  }

  render() {
    console.log("3. render Call");
    return <h2>[THIS IS CONSTRUCOR FUNCTION]</h2>;
  }
}

export default R005_LifecycleEx;
