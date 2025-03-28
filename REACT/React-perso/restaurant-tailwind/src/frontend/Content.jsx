import React from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
export default function Content() {
  return (
    <div className="flex flex-col">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}
