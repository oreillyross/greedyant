import * as React from "react";
import styled from "styled-components";
import data from "../db.json";

console.log(data);

const Outline = styled.div`
  margin: 1em;
  padding: 1em;
  border: 1px dashed red;
`;

const StyledTable = styled.table`
   width: 100%;
   & > tr {
     background: red;
   }
`

interface Ingredient {
  quantity: number;
  measurement: string;
  name: string;
  expiryDate: Date;
}

type Ingredients = Ingredient[];

const List = () => {
  return (
    <Outline>
      <StyledTable>
        <tr>
          <th>Quantity</th>
          <th>Measurement</th>
          <th>Name</th>
          <th>Expiry date</th>
        </tr>
        {data.ingredients.map((ingredient) => {
          return (
            <tr>
              <td>{ingredient.quantity}</td>

              <td>{ingredient.measurement}</td>
              <td>{ingredient.name}</td>
              <td>{ingredient.expiryDate}</td>
            </tr>
          );
        })}
      </StyledTable>
    </Outline>
  );
};

export { List };
