import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";

class Counter extends Component {
  render() {
    const { count } = this.props;

    function setColor() {
      if (count === 0) {
        return "white";
      } else if (count > 0) {
        return `rgba(255, ${count} ,0, .4)`;
      } else if (count < 0) {
        return `rgba(${count}, 100 , 100, .6)`;
      }
    }

    return (
      <div
        className="counter"
        style={{
          // backgroundColor: count > 0 ? "red" : "blue",
          backgroundColor: setColor(),
        }}
      >
        <div>{count}</div>
        <Controls />
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
};

export default Counter;
