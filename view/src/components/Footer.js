import styles from "./css/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerCont}>
      <p className={styles.footerP}>
        Made by{" "}
        <a
          className={styles.footerA}
          href="https://hekimianz.github.io/portfolio/"
          target="_blank"
          rel="noreferrer"
        >
          Aram Hekimian Guerrero
        </a>
      </p>
    </div>
  );
}

export default Footer;
