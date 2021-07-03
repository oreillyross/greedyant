import * as React from 'react';
import { IIngredient } from "../types/IIngredient";

type Props = {
	ingredient: IIngredient;
}

function IngredientCard<Props>(props: Props ) {
 const {ingredient} = props 
	return (
	  <div>{ingredient.name}</div>
  )
}
 
export { IngredientCard }