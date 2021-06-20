import React from "react";
import  {IngredientDisplay}  from "./IngredientDisplay";
import { render, screen } from "@testing-library/react";
import * as data from "../datasources/ingredients.json"

describe("IngredientDisplay", () => {
  it("renders correctly with h3 tag", () => {
    render(<IngredientDisplay ingredients={data.ingredientsfromPantry}/>)
    const text = screen.getByText("Show the ingredients")
    console.log(text.innerHTML)
  });
});
 