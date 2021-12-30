import React from "react";
import Product from "../Product/Product";
import { useProducts, useProductsActions } from "../providers/ProductsProvider";

// class ProductList extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     if (this.props.humans.length === 0) {
//       return <div>there is no human on the choices</div>;
//     }
//     return (
//       <div>
//         {this.props.humans.map((person,index) => {
//           return (
//             <Product
//               human={person}
//               key={index}
//               onDelete={() => this.props.onRemove(person.id)}
//               onIncrement={() => this.props.onIncrement(person.id)}
//               changeName={(e) => this.props.onChange(e, person.id)}
//               onDecrement={() => this.props.onDecrement(person.id)}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }
const ProductList = () => {
  const humans = useProducts();
  const dispatch = useProductsActions();
  return (
    <div>
      {humans.map((human) => {
        if (humans.length === 0) {
          return <div>there is no human on the choices</div>;
        }

        return (
          <Product
            // name={human.name}
            // age={human.age}
            human={human}
            key={human.id}
            onDelete={() => dispatch({ type: "remove", id: human.id })}
            onIncrement={() => dispatch({ type: "increment", id: human.id })}
            changeName={(e) =>
              dispatch({ type: "edit", id: human.id, event: e })
            }
            onDecrement={() => dispatch({ type: "decrement", id: human.id })}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
