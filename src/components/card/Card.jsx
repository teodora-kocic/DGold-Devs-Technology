import React from "react";
import "./Card.css";

export default function Card({ title, imageUrl, text, subTitle }) {
  return (
    <div className="CardContainer">
      <h1>{title}</h1>
      <img src={imageUrl} alt="counter" />

      <p>{text}</p>

      <h3>{subTitle}</h3>
    </div>
  );
}
