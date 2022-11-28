import React from "react";
import receitas from "../assets/receitas.json";
import { Link } from "react-router-dom";

export default function ListRecipes() {
  return (
    <ul>
      {Object.keys(receitas).map((key) => (
        <li key={key}>
          <Link to={`/recipe/${key}`}>
            <span>{key}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
