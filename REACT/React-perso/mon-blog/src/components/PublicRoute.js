import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log("Token exist?", !!token); // Vérifiez si le token est bien récupéré
  return token ? <Navigate to="/profile" /> : children;
};

export default PublicRoute;
