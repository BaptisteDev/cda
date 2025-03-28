import React, { useState } from "react";
import axios from "axios";

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Fonction pour gérer l'ajout d'un article
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/articles", {
        title,
        content,
      });
      console.log("Article ajouté :", response.data);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'article :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Titre :
        </label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Contenu :
        </label>
        <textarea
          id="content"
          className="form-control"
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Ajouter l'article
      </button>
    </form>
  );
};

export default AddArticle;
