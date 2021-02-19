import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  onClickIncrement = () => {
    this.setState({counter: this.state.counter + 1})
  }
  onClickDecrement = () => {
    this.setState({counter: this.state.counter - 1})
  }
  render() {
    return (
      <div>
        <h2>Counter: {this.props.name}</h2>
        <button onClick={this.onClickIncrement}>+</button>
        <span>{this.state.counter}</span>
        <button onClick={this.onClickDecrement}>-</button>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

export default Counter;
