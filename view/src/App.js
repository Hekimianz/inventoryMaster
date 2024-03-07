import styles from "./App.module.css";
import Top from "./components/Top";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.mainCont}>
      <Top />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
