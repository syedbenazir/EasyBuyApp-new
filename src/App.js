import React, { Component } from "react";
import NavBar from "./components/navbar";
import Nums from "./components/nums";

class App extends Component {
  state = {
    nums: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = num => {
    const nums = [...this.state.nums];
    const index = nums.indexOf(num);
    nums[index] = { ...nums[index] };
    nums[index].value++;
    this.setState({ nums });
  };
  handleDecrement = num => {
    const nums = [...this.state.nums];
    const index = nums.indexOf(num);
    nums[index] = { ...nums[index] };
    nums[index].value--;
    this.setState({ nums });
  };
  handleReset = () => {
    const nums = this.state.nums.map(n => {
      n.value = 0;
      return n;
    });
    this.setState({ nums });
  };
  handleDelete = numId => {
    const nums = this.state.nums.filter(n => n.id !== numId);
    this.setState({ nums });
  };
  handleRestart = () => {
    window.location.reload();
  };

  render() {
    return (
      <div>
        <NavBar totalNums={this.state.nums.filter(n => n.value > 0).length} />

        <Nums
          nums={this.state.nums}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onRestart={this.handleRestart}
        />
      </div>
    );
  }
}

export default App;
