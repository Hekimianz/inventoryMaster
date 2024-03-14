import styles from "./css/AddProduct.module.css";
import { useState } from "react";

function AddProduct({ setShowAdd, updateMain }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const handleAddProduct = async () => {
    try {
      const response = await fetch(
        "https://inventorymaster-api.onrender.com/addProduct/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quantity: quantity,
            name: name,
          }),
        }
      );
      if (response.ok) {
        updateMain();
      } else {
        console.error("Failed to add product");
      }
    } catch (err) {
      console.error("Failed to add product: ", err);
    }
  };
  return (
    <div className={styles.showAddCont}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Quantity Available"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      />
      <button onClick={handleAddProduct}>Add</button>
      <span
        className={"material-symbols-outlined " + styles.closeBtn}
        onClick={() => {
          setShowAdd(false);
        }}
      >
        close
      </span>
    </div>
  );
}

export default AddProduct;
