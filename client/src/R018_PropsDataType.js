import React, { Component } from "react";
import datatype from "prop-types";

class R018_PropsDataType extends Component {
  render() {
    let { String, Number, Boolean, Array, Function } = this.props;
    return (
      <div style={{ padding: "0px" }}>
        <p>StringProps: {String}</p>
        <p>NumberProps: {Number}</p>
        <span>BooleanProps : {Boolean.toString()}</span>
        <p>ArrayProps: {Array.toString()}</p>
        {/* <p>Object JsonProps: {JSON.stringify(Object Json)}</p> */}
        <p>FunctionProps: {Function}</p>
      </div>
    );
  }
}

R018_PropsDataType.propTypes = {
  String: datatype.string,
  Number: datatype.number,
  Boolean: datatype.bool,
  Array: datatype.array,
  // Object Json: datatype.object,
  Function: datatype.func,
};

export default R018_PropsDataType;
