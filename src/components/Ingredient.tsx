import { StringValueNode } from "graphql";
import * as React from "react";

interface Props {
  ingredient: {
    name: string;
  };
}

export function Ingredient({ ingredient }: Props) {
  return <div>{Ingredient.name}</div>;
}
