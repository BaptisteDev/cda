import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import styles from "./App.module.scss";
function App() {
  return (
    <div className={`${styles.appContainer} d-flex flex-column`}>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
