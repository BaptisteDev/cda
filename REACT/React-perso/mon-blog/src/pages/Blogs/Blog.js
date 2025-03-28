import React, { useEffect, useState } from "react";
import axios from "axios";
import AddArticle from "./AddArticles";
const Blog = () => {
  const [articles, setArticles] = useState([]);

  // Fetch articles from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/articles")
      .then((response) => setArticles(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mt-5">
      <AddArticle></AddArticle>
      <h1 className="text-center mb-4">Blog</h1>
      <div className="row">
        {articles.map((article) => (
          <div key={article._id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
