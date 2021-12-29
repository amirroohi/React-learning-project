import React, { Component, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/hoc/wrapper";

class AppClass extends Component {
  state = {
    humans: [
      { name: "amir", age: "22", id: "1", quantity: "1" },
      { name: "shahram", age: "44", id: "2", quantity: "1" },
      { name: "bahram", age: "50", id: "3", quantity: "1" },
    ],
  };



  removeHandler = (id) => {
    const updatedHumans = [...this.state.humans];
    const filteredHumans = updatedHumans.filter((h) => h.id !== id);
    this.setState({humans: filteredHumans });
  };

  incrementHandler = (id) => {
    const index = this.state.humans.findIndex((item) => item.id === id);
    // console.log(index);
    console.log(index);

    const human = { ...this.state.humans[index] };
    human.quantity++;
    const updatedHumans = [...this.state.humans];
    updatedHumans[index] = human;
    this.setState({humans: updatedHumans });
    // console.log(human.quantity);
  };

  decrementHandler = (id) => {
    const index = this.state.humans.findIndex((item) => item.id === id);
    const human = { ...this.state.humans[index] };
    console.log(id);
    console.log(index);

    if (human.quantity <= 1) {
      const existedItem = this.state.humans.filter((human) => human.id !== id);
      this.setState({humans: existedItem });
    } else {
      const updatedHumans = [...this.state.humans];
      human.quantity--;
      updatedHumans[index] = human;
      this.setState({humans: updatedHumans });
    }
  };

  changeNameHandler = (e, id) => {
    const updatedHumans = [...this.state.humans];
    const index = this.state.humans.findIndex((item) => item.id === id);
    const human = { ...this.state.humans[index] };
    human.name = e.target.value;
    updatedHumans[index] = human;
    this.setState({humans: updatedHumans });
  };

  showTotalExistedItems = () => {
    const updatedHumans = [...this.state.humans];
    let initialValue = 0;
    const totalExsitedItems = updatedHumans.reduce(
      (previousValue, currentValue) =>
        previousValue + parseInt(currentValue.quantity),
      initialValue
    );
    initialValue = totalExsitedItems;
    return initialValue;
  };
  render() {
      console.log(this.state.humans);
    return (
      <>
        <NavBar totalItems={this.showTotalExistedItems} />
        <ProductList
          humans={this.state.humans}
          onRemove={this.removeHandler}
          onIncrement={this.incrementHandler}
          onChange={this.changeNameHandler}
          onDecrement={this.decrementHandler}
        />
      </>
    );
  }
}

export default Wrapper(AppClass, "container");
