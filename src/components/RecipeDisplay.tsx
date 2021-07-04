import React from "react"
import { Title } from "@mantine/core";
import { Recipe } from "../components/Recipe"
import { recipe } from "../mock/recipes";



export function RecipeDisplay() {
    return (
        <div>
            <Title order={3}>Recipes</Title>
            <Recipe recipe={recipe}/>

        </div>
    )
}