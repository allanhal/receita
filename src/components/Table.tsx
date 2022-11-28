import React from "react";
import "./Table.css";
import Row from "./Row";
import receitas from "../assets/receitas.json";
import { useParams } from "react-router-dom";

export default function Table(props: any) {
  const { recipe = "" } = useParams();

  return (
    <>
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
          {(receitas[recipe] || []).map((props) => (
            <Row {...props} />
          ))}
        </tbody>
      </table>
    </>
  );
}
