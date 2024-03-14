import styles from "./css/Main.module.css";
import { useState, useEffect } from "react";
import Product from "./Product";
import EditProduct from "./EditProduct";
import AddProduct from "./AddProduct";
function Main() {
  const [inventory, setInventory] = useState([]);
  const [search, setSearch] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [editInfo, setEditInfo] = useState({});
  const [showAdd, setShowAdd] = useState(false);

  const searchByName = async (name) => {
    const response = await fetch(
      `https://inventorymaster-api.onrender.com/${name}`
    );
    const data = await response.json();
    setInventory(data);
  };

  let products = inventory.map((product) => {
    return (
      <Product
        id={product.productid}
        name={product.productname}
        quant={product.quantityavailable}
        key={product.productid}
        setShowEdit={setShowEdit}
        setEditInfo={setEditInfo}
      />
    );
  });
  const fetchData = async () => {
    const response = await fetch("https://inventorymaster-api.onrender.com/");
    const data = await response.json();
    setInventory(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const updateMain = () => {
    fetchData();
  };

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
        <div className={styles.colorsCont}>
          <div className={styles.colorLegend}>
            <span className={styles.colorBoxRed}></span>
            <span>- Sold Out</span>
          </div>
          <div className={styles.colorLegend}>
            <span className={styles.colorBoxYellow}></span>
            <span>- Few Left</span>
          </div>
        </div>
      </div>
      <div className={styles.productsCont}>
        <Product isLegend={true} id="Id" name="Name" quant="Quantity" />
        <div
          className={styles.addProductCont}
          onClick={() => {
            setShowAdd(true);
          }}
        >
          <span className={"material-symbols-outlined " + styles.addBtn}>
            add
          </span>
          <span className={styles.addProductText}>New Product</span>
        </div>
        {products}
      </div>
      {showEdit ? (
        <EditProduct
          info={editInfo}
          setShowEdit={setShowEdit}
          updateMain={updateMain}
        />
      ) : null}
      {showAdd ? (
        <AddProduct setShowAdd={setShowAdd} updateMain={updateMain} />
      ) : null}
    </div>
  );
}

export default Main;
