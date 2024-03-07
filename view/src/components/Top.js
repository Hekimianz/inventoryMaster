import styles from "./css/Top.module.css";

function Top() {
  return (
    <div className={styles.topCont}>
      <img className={styles.logo} src="../logo.svg" alt="logo" />
      <h1 className={styles.title}>Inventory Master</h1>
    </div>
  );
}

export default Top;
