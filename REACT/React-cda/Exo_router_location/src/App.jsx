import Header from "./components/Header";
import Listings from "./pages/listing/Listings";
import Reviews from "./pages/reviews/Reviews";
import Footer from "./components/Footer";
import { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { HeaderContext } from "./context/HeaderContext";

function App() {
  const { user, mode } = useContext(HeaderContext);
  return (
    <div
      className={`min-h-screen flex flex-col ${
        mode ? "bg-gray-100" : "bg-gray-800"
      } `}
    >
      <Header />
      <main className="flex-grow">
        <Outlet></Outlet>
        {user === null && (
          <p
            className={`text-center text-2xl ${
              mode ? "text-red-800" : "text-white"
            }  m-28`}
          >
            Vous devez etre connecté
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
