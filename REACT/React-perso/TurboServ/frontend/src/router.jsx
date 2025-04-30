import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/errors/errorPage";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import Home from "./pages/home/Home";
import UserNotConnected from "./components/protectedRoutes/UserNotConnected";
import UserConnected from "./components/protectedRoutes/UserConnected";
import Profile from "./pages/profile/Profile";
import ServerGames from "./pages/server/ServerGames";
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "login",
        element: (
          <UserNotConnected>
            <Login></Login>
          </UserNotConnected>
        ),
      },
      {
        path: "register",
        element: (
          <UserNotConnected>
            <Register></Register>
          </UserNotConnected>
        ),
      },
      {
        path: "/serveur-de-jeux",
        element: <ServerGames></ServerGames>,
      },
      {
        path: "/profile",
        element: (
          <UserConnected>
            <Profile></Profile>
          </UserConnected>
        ),
      },
    ],
  },
]);
