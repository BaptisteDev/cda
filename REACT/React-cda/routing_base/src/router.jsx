import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Expenses from "./pages/expenses/Expenses";
import Register from "./pages/forms/Register";
import Login from "./pages/forms/Login";
import ErrorPage from "./pages/errorPage";
import Profile from "./pages/profile/Profile";
import Overview from "./pages/profile/pages/Overview";
import Data from "./pages/profile/pages/Data";
import Details from "./pages/details/Details";
import UserConnected from "./components/protectedRoutes/UserConnected";
import UserNotConnected from "./components/protectedRoutes/UserNotConnected";
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <App></App>,
    children: [
      {
        path: "/",
        element: (
          <UserConnected>
            <Expenses></Expenses>
          </UserConnected>
        ),
      },
      {
        path: "/register",
        element: (
          <UserNotConnected>
            <Register></Register>
          </UserNotConnected>
        ),
      },
      {
        path: "/login",
        element: (
          <UserNotConnected>
            <Login></Login>
          </UserNotConnected>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <UserConnected>
            <Details></Details>
          </UserConnected>
        ),
      },
      {
        path: "/profile",
        element: (
          <UserConnected>
            <Profile></Profile>
          </UserConnected>
        ),
        children: [
          {
            index: true,
            element: <Overview></Overview>,
          },
          {
            path: "data",
            element: <Data></Data>,
          },
        ],
      },
    ],
  },
]);
