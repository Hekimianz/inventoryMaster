import styles from "./css/Product.module.css";
function Product(props) {
  return (
    <div className={styles.productCont}>
      <p className={styles.productId}>{props.id}</p>
      <p className={styles.productName}>{props.name}</p>
      <div className={styles.quantityCont}>
        {props.isLegend ? null : <span className={styles.decrement}>-</span>}
        <p className={styles.productQuantity}>{props.quant}</p>
        {props.isLegend ? null : <span className={styles.increment}>+</span>}
      </div>
    </div>
  );
}
export default Product;
