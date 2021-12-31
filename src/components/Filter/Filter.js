import { useState } from "react";
import { useProductsActions } from "../providers/ProductsProvider";

const Filter = () => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");
  const changeSizehandler = (e) => {
    dispatch({ type: "filter", event: e });
    setValue(e.target.value);
  };
  return (
    <div>
      <p>filter users by:</p>
      <div>
        <select onChange={changeSizehandler} value={value}>
          <option value="">All</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
          <option value="XXXL">XXXL</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
