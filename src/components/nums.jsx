import React, { Component } from "react";
import Num from "./num";

class Nums extends Component {
  render() {
    const {
      onReset,
      onIncrement,
      onDelete,
      onDecrement,
      nums,
      onRestart
    } = this.props;
    return (
      <div>
        <button
          onClick={onReset}
          disabled={nums.length === 0 ? "disabled" : ""}
        >
          Reset
        </button>
        <button
          onClick={onRestart}
          disabled={nums.length !== 0 ? "disabled" : ""}
        >
          <b>Restart</b>
        </button>
        {nums.map(num => (
          <Num
            key={num.id}
            num={num}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Nums;
