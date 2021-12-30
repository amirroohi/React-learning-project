import styles from "./Product.module.css";
import React, { Component } from "react";
import { BiTrash } from "react-icons/bi";
import { useEffect } from "react";

const Product = ({ human, onDecrement, onIncrement, changeName, onDelete }) => {
 

  return (
    <div className={styles.product}>
      <p> Name : {human.name}</p>
      <p> Age : {human.age}.</p>
      <div className={styles.numbers}>
        <button
          className={`${styles.button} ${styles.dec} ${
            human.quantity <= 1 && styles.remove
          }`}
          onClick={onDecrement}
        >
          {human.quantity > 1 ? "-" : <BiTrash />}
        </button>
        <span className={styles.quantity}>{human.quantity}</span>
        <button
          className={`${styles.button} ${styles.inc}`}
          onClick={onIncrement}
        >
          +
        </button>
      </div>
      <input
        type="text"
        className={styles.inputName}
        onChange={changeName}
        value={human.name}
      />
      <button className={styles.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Product;

// class Product extends Component {

//   render() {
//     return (
//       <div className={styles.product}>
//         <p> Name : {this.props.human.name}</p>
//         <p> Age : {this.props.human.age}.</p>
//         <div className={styles.numbers}>
//           <button
//             className={`${styles.button} ${styles.dec} ${
//               this.props.human.quantity <= 1 && styles.remove
//             }`}
//             onClick={this.props.onDecrement}
//           >
//             {this.props.human.quantity>1 ? "-":<BiTrash/>}
//           </button>
//           <span className={styles.quantity}>{this.props.human.quantity}</span>
//           <button
//             className={`${styles.button} ${styles.inc}`}
//             onClick={this.props.onIncrement}
//           >
//             +
//           </button>
//         </div>
//         <input
//           type="text"
//           className={styles.inputName}
//           onChange={this.props.changeName}
//           value={this.props.human.name}
//         />
//         <button className={styles.button} onClick={this.props.onDelete}>
//           Delete
//         </button>
//       </div>
//     );
//   }
// }

// export default Product;
