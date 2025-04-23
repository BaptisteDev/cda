import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Import de mon système de route
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
