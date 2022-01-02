import { useState } from "react";
import { useProductsActions } from "../providers/ProductsProvider";
import styles from "./filter.module.css";
import SelectComponent from "../../common/Select/Select";
import Search from "../../common/Search/Search";
const filterOptions = [
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
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const changeSizehandler = (seletedOption) => {
    dispatch({ type: "filter", seletedOption });
    dispatch({ type: "sort", seletedOption: sort });
    setFilter(seletedOption);
  };
  const sortAgeHandler = (seletedOption) => {
    dispatch({ type: "sort", seletedOption });
    // dispatch({ type: "filter", seletedOption:value });
    setSort(seletedOption);
  };
  return (
    <section>
      <Search filter={filter} />
      <div className={styles.filter}>
        <p>filter users by:</p>
        <SelectComponent
          value={filter}
          onChange={changeSizehandler}
          options={filterOptions}
          title="sort by size:"
        />
        <SelectComponent
          value={sort}
          onChange={sortAgeHandler}
          options={sortOptions}
          title="sort by age:"
        />
      </div>
    </section>
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
