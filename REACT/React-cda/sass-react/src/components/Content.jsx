import React from "react";
import Card from "./Card";

export default function Content() {
  return (
    <div className="flex-fill">
      <div className="d-flex flex-wrap justify-content-around">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}
