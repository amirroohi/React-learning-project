import React, { Component } from "react";
class ClassCounter extends Component {
  state = {
    name: "",
    count: 0,
  };
  componentDidMount() {
    document.title = `${this.state.count} time(s)`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("title updating");
      document.title = `${this.state.count} time(s)`;
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          count:{this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
