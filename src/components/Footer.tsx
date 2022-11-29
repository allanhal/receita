import React from "react";

interface Props {
  sum: number;
}

export default function Footer(props: Props) {
  const { sum } = props;
  return (
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <th>Sum</th>
      <td>R$</td>
      <td>{sum.toFixed(2)}</td>
    </tr>
  );
}
