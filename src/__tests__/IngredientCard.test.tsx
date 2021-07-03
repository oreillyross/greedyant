import * as React from "react";
import { render, screen } from "@testing-library/react";
import { IngredientCard } from "../components/IngredientCard";

describe("Ingredient Card", () => {
  it("Renders with Card element", () => {
     const card = render(<IngredientCard ingredient={ingredient}/>)

  });
});
