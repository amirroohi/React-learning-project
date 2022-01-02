import Select from "react-select";
import styles from "./select.module.css";

const SelectComponent = ({ title, ...rest }) => {
  return (
    <div className={styles.selectContainer}>
      <p>{title}</p>
      <Select {...rest} title={title} className={styles.select} />
    </div>
  );
};

export default SelectComponent;
