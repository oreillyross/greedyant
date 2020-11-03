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
  & > tbody, thead {
    background: red;
  }
`;

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
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Measurement</th>
            <th>Name</th>
            <th>Expiry date</th>
          </tr>
        </thead>
        <tbody>
          {data.ingredients.map((ingredient) => {
            return (
              <tr key={ingredient.name}>
                <td>{ingredient.quantity}</td>

                <td>{ingredient.measurement}</td>
                <td>{ingredient.name}</td>
                <td>{ingredient.expiryDate}</td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </Outline>
  );
};

export { List };
