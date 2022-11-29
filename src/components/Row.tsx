import React from "react";
import Fraction from "fraction.js";

interface Props {
  id?: number;
  name: string;
  qtd: number;
  value: number;
  qtdUsed: number;
  currency?: string;
}

export default function Row(props: Props) {
  const { id, name, qtd, value, qtdUsed, currency = "R$" } = props;

  return (
    <tr>
      <th scope="row">{id?.toString()}</th>
      <td>{name}</td>
      <td>{qtd.toString()}</td>
      <td>{currency}</td>
      <td>{value.toString()}</td>
      <td>
        {qtdUsed.toString()}{" "}
        {!Number.isInteger(qtdUsed) &&
          `(${new Fraction(qtdUsed).toFraction(true)})`}
      </td>
      <td>R$</td>
      <td>{((value / qtd) * qtdUsed * 1.1).toFixed(2)}</td>
    </tr>
  );
}
