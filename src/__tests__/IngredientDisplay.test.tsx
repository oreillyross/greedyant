import React from "react";
import  {IngredientDisplay}  from "../components/IngredientDisplay";
import { render, screen } from "@testing-library/react";
import * as data from "../datasources/ingredients.json"

describe("IngredientDisplay", () => {
  it("renders correctly with h3 tag", () => {
    render(<IngredientDisplay ingredients={data.ingredientsfromPantry}/>)
    const text = screen.getByText("Show the ingredients")
    expect(text.innerHTML).toEqual("Show the ingredients")
  });

  it("Renders the four ingredients loaded", () => {
    
    render(<IngredientDisplay ingredients={data.ingredientsfromPantry}/>)
    const items = screen.queryAllByTestId("ing")
    expect(items.length).toEqual(4);
  })
});
 