import React from "react";
import OneArticle from "./OneArticle";

export default function Articles() {
  const articles = [
    {
      id: 1,
      name: "Chaussures de running Nike Air Zoom Pegasus 40",
      price: 129.99,
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      favorite: true,
    },
    {
      id: 2,
      name: "Ballon de football Adidas Al Rihla",
      price: 39.99,
      image:
        "https://images.pexels.com/photos/17404207/pexels-photo-17404207/free-photo-of-etre-debout-stand-echoppe-paves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      favorite: true,
    },
    {
      id: 3,
      name: "Vélo de route Trek Domane SL 6",
      price: 3499.0,
      image:
        "https://images.pexels.com/photos/5807543/pexels-photo-5807543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      favorite: false,
    },
    {
      id: 4,
      name: "Haltères réglables Bowflex SelectTech 552",
      price: 399.0,
      image:
        "https://images.pexels.com/photos/703014/pexels-photo-703014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      favorite: true,
    },
  ];

  return (
    <div className="products-flex">
      {articles.map((article) => (
        <OneArticle article={article} key={article.id} />
      ))}
    </div>
  );
}
