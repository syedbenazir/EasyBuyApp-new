import React, { Component } from "react";

class Num extends Component {
  render() {
    return (
      <div>
        <span>ID NUMBER:{this.formatId()}</span>=
        <span>{this.formatCount()}KG</span>
        <button onClick={() => this.props.onIncrement(this.props.num)}>
          <b>+</b>
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.num)}
          disabled={this.props.num.value === 0 ? "disabled" : ""}
        >
          <b>-</b>
        </button>
        <button onClick={() => this.props.onDelete(this.props.num.id)}>
          <b>x</b>
        </button>
      </div>
    );
  }
  formatCount = () => {
    const { value } = this.props.num;
    return value === 0 ? "Zero" : value;
  };
  formatId = () => {
    const { id } = this.props.num;
    return id;
  };
}

export default Num;
