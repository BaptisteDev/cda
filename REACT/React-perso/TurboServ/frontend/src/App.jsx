// import "./App.css";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthProvider from "./components/providers/AuthProvider";
import ServerProvider from "./components/providers/ServerContext";
import PaiementProvider from "./components/providers/PaiementProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AuthProvider>
        <ServerProvider>
          <PaiementProvider>
            <div className="min-h-screen flex flex-col bg-white w-full">
              <Header></Header>
              <Toaster></Toaster>
              <div className="container">
                <Outlet></Outlet>
              </div>
              <Footer></Footer>
            </div>
          </PaiementProvider>
        </ServerProvider>
      </AuthProvider>
    </>
  );
}

export default App;
