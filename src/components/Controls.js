import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Controls extends Component {
  render() {
    const {
      incrementLabel,
      decrementLabel,
      resetLabel,
      increment,
      decrement,
      reset,
    } = this.props;

    return (
      <div className="controls">
        <div
          onClick={() => {
            increment();
          }}
          className="cons dis"
        >
          <span>{incrementLabel}</span>
        </div>
        <div
          onClick={() => {
            reset();
          }}
        >
          <span>{resetLabel}</span>
        </div>
        <div
          onClick={() => {
            decrement();
          }}
          className="cons dis"
        >
          <span>{decrementLabel}</span>
        </div>
        <div>
          <input
            type="range"
            min="0"
            max="100"
            value="1"
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
}

Controls.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  reset: PropTypes.func,
  resetLabel: PropTypes.string,
  incrementLabel: PropTypes.string,
  decrementLabel: PropTypes.string,
};

Controls.defaultProps = {
  incrementLabel: "+",
  decrementLabel: "-",
  resetLabel: "Reset",
};

const handleChange = (event) => {
  console.log(event.target.value);
};

export default Controls;
