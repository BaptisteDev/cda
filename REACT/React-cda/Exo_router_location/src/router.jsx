import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErroPage";
import Login from "./pages/forms/Login";
import Maison from "./pages/maison/Maison";
import Appartement from "./pages/appartement/Appartement";
import AppartementVendu from "./pages/appartement/pages/AppartementVendu";
import AppartementVendre from "./pages/appartement/pages/AppartementVendre";
import Listings from "./pages/listing/Listings";
import Reviews from "./pages/reviews/Reviews";
import MaisonVendu from "./pages/maison/pages/MaisonVendu";
import MaisonVendre from "./pages/maison/pages/MaisonVendre";
import UserConnected from "./components/protectedRoutes/UserConnected";
import UserNotConnected from "./components/protectedRoutes/UserNotConnected";
import Register from "./pages/forms/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <App></App>,
    children: [
      {
        index: true,
        element: (
          <UserConnected>
            <Listings></Listings>
            <Reviews></Reviews>
          </UserConnected>
        ),
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
        path: "maison",
        element: (
          <UserConnected>
            <Maison></Maison>
          </UserConnected>
        ),
        children: [
          {
            index: true,
            element: <MaisonVendu></MaisonVendu>,
          },
          {
            path: "a-vendre",
            element: <MaisonVendre></MaisonVendre>,
          },
        ],
      },
      {
        path: "appartement",
        element: (
          <UserConnected>
            <Appartement></Appartement>
          </UserConnected>
        ),
        children: [
          {
            index: true,
            element: <AppartementVendu></AppartementVendu>,
          },
          {
            path: "a-vendre",
            element: <AppartementVendre></AppartementVendre>,
          },
        ],
      },
    ],
  },
]);
