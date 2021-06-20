import * as React from "react";
import styled from "styled-components";

//ups roca
// url placement size repeat o clip attachment
const StyledDisplay = styled.div`
  position: relative;
  margin: 24px;
  font-size: 16px;
  padding: 16px;
  width: 400px;
  height: 400px;
  border: 1px solid green;
  background-image: url("https://res.cloudinary.com/pantler/image/upload/c_scale,w_384/v1556653564/1200px-Bright_red_tomato_and_cross_section02_u8hklz.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 20px;
`;

const StyledContainer = styled.div`
  border: 1px solid seagreen;
`;

const StyledName = styled.div`
  position: absolute;
  top: 25px;
`;

interface Ingredient {
  id: string;
  name: string;
  quantity?: number;
  expiry: string;
  image?: string;
}
interface IIngredientProps {
  ingredients: Array<Ingredient>;
}

function IngredientDisplay({ ingredients }: IIngredientProps) {
  return (
    <>
      <h3>Show the ingredients</h3>
      {/* This is the main display using flex to show all the ingredients as 
           cards */}
      <section>{ingredients.map(ingredient => (
        <div key={ingredient.id}>{ingredient.name}</div>
      ))}</section>
    </>
  );
}

export { IngredientDisplay };
