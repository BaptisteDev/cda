import React from "react";
import styles from "../Card.module.scss";
import Button from "./Button";
export default function Card() {
  return (
    <div className={`${styles.card} p-10 mt-10`}>
      <h3>Title</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
        incidunt? Reprehenderit molestias ipsum distinctio quisquam eveniet
        magnam incidunt sit omnis dolorum sequi tempore et ex voluptatum, quod
        accusantium aliquam obcaecati?
      </p>
      <Button></Button>
    </div>
  );
}
