// import "./App.css";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthProvider from "./components/providers/AuthProvider";
import ServerProvider from "./components/providers/ServerContext";

function App() {
  return (
    <>
      <AuthProvider>
        <ServerProvider>
          <div className="min-h-screen flex flex-col bg-white w-full">
            <Header></Header>
            <div className="container">
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
          </div>
        </ServerProvider>
      </AuthProvider>
    </>
  );
}

export default App;
