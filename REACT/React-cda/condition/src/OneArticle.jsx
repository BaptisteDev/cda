import React from "react";
import { FaHeart } from "react-icons/fa";

export default function OneArticle({ article }) {
  return (
    <div className="product-card">
      <img src={article.image} alt={article.name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{article.name}</h2>
        <div className="flex flex-row items-center">
          <p className="product-price flex-grow">{article.price}</p>
          {article.favorite && <FaHeart className="text-red-500"></FaHeart>}
        </div>
      </div>
    </div>
  );
}
