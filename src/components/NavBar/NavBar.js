import { useProducts } from "../providers/ProductsProvider";
import styles from "./navBar.module.css";

const NavBar = () => {
  const humans = useProducts()

  const showTotalExistedItems = () => {
    const updatedHumans = [...humans];
    let initialValue = 0;
    const totalExsitedItems = updatedHumans.reduce(
      (previousValue, currentValue) =>
        previousValue + parseInt(currentValue.quantity),
      initialValue
    );
    initialValue = totalExsitedItems;
    return initialValue;
  };

  return (
    <header className={styles.navBar}>
      <h2>shopping app</h2>
      <span>existed : <p>{showTotalExistedItems()}</p> </span>
    </header>
  );
};

export default NavBar;
