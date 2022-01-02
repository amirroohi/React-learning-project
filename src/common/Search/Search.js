import { useState } from "react";
import { useProductsActions } from "../../components/providers/ProductsProvider";
import styles from "./search.module.css";

const Search = ({ filter }) => {
  const dispatch = useProductsActions();

  const [value, setValue] = useState("");
  const changeHandler = (searchEvent) => {
    // console.log(searchEvent.target.value);
    dispatch({ type: "filter", seletedOption: filter });
    dispatch({ type: "search", searchEvent });
    setValue(searchEvent.target.value);
  };

  return (
    <div className={styles.formControl}>
      <div>search for </div>
      <input
        type="text"
        placeholder="serach for ..."
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default Search;
