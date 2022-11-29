import React from "react";
import Row from "./Row";
import receitas from "../assets/receitas.json";
import { useParams } from "react-router-dom";
import Footer from "./Footer";

export default function Table(props: any) {
  const { recipe = "" } = useParams();

  const ingredientes = receitas[recipe] || [];

  return (
    <>
      <table className="table table-striped table-hover ">
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
          {ingredientes.map(
            (props: any): JSX.Element => (
              <Row {...props} />
            )
          )}
        </tbody>
        <tfoot>
          <Footer
            sum={ingredientes.reduce(
              (
                sum: number,
                ingredientes: { qtd: any; value: any; qtdUsed: any }
              ) => {
                const { qtd, value, qtdUsed } = ingredientes;
                const updatedSum = sum + (value / qtd) * qtdUsed * 1.1;
                return updatedSum;
              },
              0
            )}
          />
        </tfoot>
      </table>
    </>
  );
}
