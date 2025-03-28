import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blogs/Blog";
import Nav from "./pages/layouts/Navbar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AddArticle from "./pages/Blogs/AddArticles";
import Profile from "./pages/Profil/Profil";
import PublicRoute from "./components/PublicRoute";

const App = () => {
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/add-article" element={<AddArticle />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login></Login>
            </PublicRoute>
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
