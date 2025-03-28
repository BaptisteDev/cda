import React, { useState } from "react";
import Content from "./components/Content";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import styles from "./App.module.scss";
import LoadingScreen from "./components/effect/loading/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      <div
        className={`main-content d-flex flex-column ${styles.appContainer} ${
          isLoading ? "hidden" : "visible"
        }`}
      >
        {!isLoading && (
          <>
            <Header />
            <Content />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
