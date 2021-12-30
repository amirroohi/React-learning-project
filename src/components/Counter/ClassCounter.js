import React, { Component } from "react";

class CounterClass extends Component {
  state = { count: 0 };

  addOneHandler = () => {
    this.setState((prvState) => {
      return { count: prvState.count + 1 };
    });
  };

  addTwoHandler = () => {
    this.setState((prvState) => {
      return { count: prvState.count + 2 };
    });
  };

  addFiveHandler = () => {
    this.setState((prvState) => {
      return { count: prvState.count + 5 };
    });
  };

  render() {
    return (
      <div>
        <h2>count - {this.state.count}</h2>
        <button onClick={this.addOneHandler}>add one</button>
        <button onClick={this.addTwoHandler}>add two</button>
        <button onClick={this.addFiveHandler}>add five</button>
      </div>
    );
  }
}

export default CounterClass;
