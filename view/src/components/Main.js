import styles from "./css/Main.module.css";
import { useState, useEffect } from "react";
import Product from "./Product";

function Main() {
  const [inventory, setInventory] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://inventorymaster-api.onrender.com/");
      const data = await response.json();
      setInventory(data);
    };
    fetchData();
  }, []);

  const searchByName = async (name) => {
    const response = await fetch(
      `https://inventorymaster-api.onrender.com/${name}`
    );
    const data = await response.json();
    setInventory(data);
  };

  const products = inventory.map((product) => {
    return (
      <Product
        id={product.productid}
        name={product.productname}
        quant={product.quantityavailable}
        key={product.productid}
      />
    );
  });
  return (
    <div className={styles.mainCont}>
      <div className={styles.searchCont}>
        <input
          className={styles.searchBar}
          placeholder="Search by name"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <span
          onClick={() => {
            searchByName(search);
          }}
          className={styles.searchBtn}
        >
          Search
        </span>
      </div>
      <div className={styles.productsCont}>
        <Product isLegend={true} id="Id" name="Name" quant="Quantity" />
        {products}
      </div>
    </div>
  );
}

export default Main;
