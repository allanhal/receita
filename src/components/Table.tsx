import React from "react";
import "./Table.css";
import Row from "./Row";
import ingredientes from "../assets/ingredientes.json";

export default function Table() {
  return (
    <table className="table">
      <caption>* grams and milliliters</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Qtd*</th>
          <th scope="col" colSpan={2}>
            Value
          </th>
          <th scope="col">Qtd Used*</th>
          <th scope="col" colSpan={2}>
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        {ingredientes.map((props) => (
          <Row {...props} />
        ))}
      </tbody>
    </table>
  );
}
