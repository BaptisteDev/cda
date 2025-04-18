import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HeaderProvider from "./components/providers/HeaderProvider.jsx";
import ListingsProvider from "./components/providers/ListingsProvider.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import AuthProvider from "./components/providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HeaderProvider>
        <ListingsProvider>
          <RouterProvider router={router}></RouterProvider>
        </ListingsProvider>
      </HeaderProvider>
    </AuthProvider>
  </StrictMode>
);
