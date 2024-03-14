import styles from "./css/Product.module.css";
import { useState, useEffect } from "react";

function Product(props) {
  const [quantity, setQuantity] = useState(props.quant);
  useEffect(() => {
    setQuantity(props.quant);
  }, [props.quant]);

  return (
    <div
      className={
        quantity === 0
          ? styles.productSoldOut
          : quantity <= 30
          ? styles.productAlmostSoldOut
          : styles.productCont
      }
    >
      <p className={styles.productId}>{props.id}</p>
      <p className={styles.productName}>{props.name}</p>
      <div className={styles.quantityCont}>
        <p className={styles.productQuantity}>{quantity}</p>
        {props.isLegend ? null : (
          <span
            onClick={() => {
              props.setEditInfo({
                name: props.name,
                quantity: props.quant,
                id: props.id,
              });
              props.setShowEdit(true);
            }}
            className={"material-symbols-outlined " + styles.edit}
          >
            edit
          </span>
        )}
      </div>
    </div>
  );
}
export default Product;
