import styles from "./css/Product.module.css";
import { useState } from "react";
function Product(props) {
  const [quantity, setQuantity] = useState(props.quant);
  const handleIncrement = async () => {
    try {
      const response = await fetch(
        `https://inventorymaster-api.onrender.com/${props.id}`,
        {
          method: "POST",
        }
      );
      if (response.ok) {
        setQuantity(quantity + 1);
      } else {
        console.error("Failed to increment quantity.");
      }
    } catch (err) {
      console.error("Error incrementing quantity:", err);
    }
  };
  return (
    <div className={styles.productCont}>
      <p className={styles.productId}>{props.id}</p>
      <p className={styles.productName}>{props.name}</p>
      <div className={styles.quantityCont}>
        {props.isLegend ? null : <span className={styles.decrement}>-</span>}
        <p className={styles.productQuantity}>{quantity}</p>
        {props.isLegend ? null : (
          <span className={styles.increment} onClick={handleIncrement}>
            +
          </span>
        )}
      </div>
    </div>
  );
}
export default Product;
