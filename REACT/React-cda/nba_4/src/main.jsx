import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import HeaderProvider from "./components/providers/HeaderProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeaderProvider>
      <RouterProvider router={router}></RouterProvider>
    </HeaderProvider>
  </React.StrictMode>
);
