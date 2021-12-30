import React, { useContext, useReducer, useState } from "react";

export const ProductContext = React.createContext();
export const ProductContextDispatcher = React.createContext();

const initialState = [
  { name: "amir", age: "22", id: "1", quantity: "1" },
  { name: "shahram", age: "44", id: "2", quantity: "1" },
  { name: "bahram", age: "50", id: "3", quantity: "1" },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const human = { ...state[index] };
      human.quantity++;
      const updatedHumans = [...state];
      updatedHumans[index] = human;
      return updatedHumans;
    }
    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const human = { ...state[index] };

      if (human.quantity <= 1) {
        const existedItem = state.filter((human) => human.id !== action.id);
        return existedItem;
      } else {
        const updatedHumans = [...state];
        human.quantity--;
        updatedHumans[index] = human;
        return updatedHumans;
      }
    }
    case "edit": {
      const updatedHumans = [...state];
      const index = state.findIndex((item) => item.id === action.id);
      const human = { ...state[index] };
      human.name = action.event.target.value;
      updatedHumans[index] = human;
      return updatedHumans;
    }
    case "remove": {
      const filteredHumans = state.filter((h) => h.id !== action.id);
      return filteredHumans;
    }
    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [product, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={product}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductContext);
export const useProductsActions = () => {
  return useContext(ProductContextDispatcher);

  // const removeHandler = (id) => {
  //   const updatedHumans = [...humans];
  //   const filteredHumans = updatedHumans.filter((h) => h.id !== id);
  //   setHumans(filteredHumans);
  // };

  // const incrementHandler = (id) => {
  //   const index = humans.findIndex((item) => item.id === id);
  //   const human = { ...humans[index] };
  //   human.quantity++;
  //   const updatedHumans = [...humans];
  //   updatedHumans[index] = human;
  //   setHumans(updatedHumans);
  // };

  // const decrementHandler = (id) => {
  //   const index = humans.findIndex((item) => item.id === id);
  //   const human = { ...humans[index] };

  //   if (human.quantity <= 1) {
  //     const existedItem = humans.filter((human) => human.id !== id);
  //     setHumans({ existedItem });
  //   } else {
  //     const updatedHumans = [...humans];
  //     human.quantity--;
  //     updatedHumans[index] = human;
  //     setHumans(updatedHumans);
  //   }
  // };

  // const changeNameHandler = (e, id) => {
  //   const updatedHumans = [...humans];
  //   const index = humans.findIndex((item) => item.id === id);
  //   const human = { ...humans[index] };
  //   human.name = e.target.value;
  //   updatedHumans[index] = human;
  //   setHumans(updatedHumans);
  // };

  // return {
  //   changeNameHandler,
  //   decrementHandler,
  //   incrementHandler,
  //   removeHandler,
  // };
};
