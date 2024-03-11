import styles from "./css/Main.module.css";
import { useState, useEffect } from "react";

function Main() {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/");
      const data = await response.json();
      console.log(data);
      setInventory(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.mainCont}>
      <div className={styles.searchCont}>
        <input className={styles.searchBar} />
        <span className={styles.searchBtn}>Search</span>
      </div>
    </div>
  );
}

export default Main;
