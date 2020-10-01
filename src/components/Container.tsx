import React from "react";
import { IngredientCard } from './IngredientCard'

type ContentProps = {
  content?: {
    name: string
  }[]
}

// (array[{}]?) => AddBox ? ContentBox[]
export default function Container({content}: ContentProps) {
  
  return (
    <IngredientCard/>
  );
  
}
