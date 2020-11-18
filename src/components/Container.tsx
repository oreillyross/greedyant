import React from "react";
import { IngredientCards } from './IngredientCards'

type ContentProps = {
  content?: {
    name: string
  }[]
}

// (array[{}]?) => AddBox ? ContentBox[]
export default function Container({content}: ContentProps) {
  
  return (
    <IngredientCards/>
  );

}