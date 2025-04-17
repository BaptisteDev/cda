import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Expenses from "./pages/expenses/Expenses";
import Register from "./pages/forms/Register";
import Login from "./pages/forms/Login";
import ErrorPage from "./pages/errorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Expenses></Expenses>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
