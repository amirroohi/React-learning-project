import { useState } from "react";
import { useProductsActions } from "../providers/ProductsProvider";
import Select from "react-select";
import styles from "./filter.module.css";
const options = [
  { value: "", label: "All" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
  { value: "XXXL", label: "XXXL" },
];
const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },

];
const Filter = () => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");
  const changeSizehandler = (seletedOption) => {
    dispatch({ type: "filter", seletedOption });
    dispatch({ type: "sort", seletedOption:sort });
    setValue(seletedOption);
  };
  const sortAgeHandler = (seletedOption) => {
    dispatch({ type: "sort", seletedOption });
    dispatch({ type: "filter", seletedOption:value });
    setSort(seletedOption);
  };
  return (
    <div className={styles.filter}>
      <p>filter users by:</p>
      <div className={styles.selectContainer}>
        <Select
          value={value}
          onChange={changeSizehandler}
          options={options}
          className={styles.select}
        />
      </div>
      <div className={styles.selectContainer}>
        <Select
          value={sort}
          onChange={sortAgeHandler}
          options={sortOptions}
          className={styles.select}
        />
      </div>
    </div>
  );
};

export default Filter;

// <select onChange={changeSizehandler} value={value}>
// <option value="">All</option>
// <option value="S">S</option>
// <option value="M">M</option>
// <option value="L">L</option>
// <option value="XL">XL</option>
// <option value="XXL">XXL</option>
// <option value="XXXL">XXXL</option>
// </select>
