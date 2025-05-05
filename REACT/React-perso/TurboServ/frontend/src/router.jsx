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
import MyServer from "./pages/profile/pages/MyServer";
import MyTemplate from "./pages/profile/pages/MyTemplate";
import MyPurchase from "./pages/profile/pages/MyPurchase";
import MyTickets from "./pages/profile/pages/MyTickets";
import MyAffiliate from "./pages/profile/pages/MyAffiliate";

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
        path: "/profil",
        children: [
          {
            index: true,
            element: (
              <UserConnected>
                <Profile />
              </UserConnected>
            ),
          },
          {
            path: "/profil/mes-serveurs",
            element: (
              <UserConnected>
                <MyServer />
              </UserConnected>
            ),
          },
          {
            path: "/profil/mes-modèles",
            element: (
              <UserConnected>
                <MyTemplate />
              </UserConnected>
            ),
          },
          {
            path: "/profil/mes-achats",
            element: (
              <UserConnected>
                <MyPurchase />
              </UserConnected>
            ),
          },
          {
            path: "/profil/mes-tickets",
            element: (
              <UserConnected>
                <MyTickets />
              </UserConnected>
            ),
          },
          {
            path: "/profil/mes-affiliations",
            element: (
              <UserConnected>
                <MyAffiliate />
              </UserConnected>
            ),
          },
        ],
      },
    ],
  },
]);
