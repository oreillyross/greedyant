import * as React from 'react';
import { IIngredient } from "../types/IIngredient";

type Props = {
	ingredient: IIngredient;
}

function IngredientCard(props: Props ) {
	const { ingredient } = props
	return (
	  <div>{props.ingredient.name}</div>
  )
}
 
export { IngredientCard }