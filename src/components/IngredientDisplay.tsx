import * as React from "react";



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
      <section><ol>{ingredients.map(ingredient => (
        <li data-testid="ing" key={ingredient.id}>{ingredient.name}</li>
      ))}</ol></section>
    </>
  );
}

export { IngredientDisplay };
