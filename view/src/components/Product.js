import styles from "./css/Product.module.css";
import { useState, useEffect } from "react";

function Product(props) {
  const [quantity, setQuantity] = useState(props.quant);
  useEffect(() => {
    setQuantity(props.quant);
  }, [props.quant]);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://inventorymaster-api.onrender.com/${props.id}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        console.log("Product deleted successfully");
        props.updateMain();
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

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
          <div>
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
            <span
              className={"material-symbols-outlined " + styles.deleteBtn}
              onClick={() => {
                handleDelete();
              }}
            >
              delete
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
export default Product;
