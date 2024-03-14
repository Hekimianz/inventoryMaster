import styles from "./css/Product.module.css";
import { useState } from "react";
function EditProduct(props) {
  const [newQuantity, setNewQuantity] = useState(props.info.quantity);
  const handleEdit = async () => {
    try {
      const response = await fetch(
        `https://inventorymaster-api.onrender.com/edit/${props.info.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newQuantity: newQuantity,
          }),
        }
      );
      if (response.ok) {
        props.updateInventoryAfterEdit(props.info.id, newQuantity);
      } else {
        console.error("Failed to edit product");
      }
    } catch (err) {
      console.error("Failed to edit product: ", err);
    }
  };

  return (
    <div className={styles.editProductCont}>
      <p>{props.info.name}</p>
      <input
        type="number"
        placeholder={props.info.quantity}
        value={newQuantity}
        onChange={(e) => {
          setNewQuantity(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (newQuantity !== props.info.quantity) {
            handleEdit();
          }
          props.setShowEdit(false);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default EditProduct;
