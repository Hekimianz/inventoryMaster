import styles from "./css/Product.module.css";
function Product(props) {
  return (
    <div className={styles.productCont}>
      <p className={styles.productId}>{props.id}</p>
      <p className={styles.productName}>{props.name}</p>
      <p className={styles.productQuantity}>{props.quant}</p>
    </div>
  );
}
export default Product;
