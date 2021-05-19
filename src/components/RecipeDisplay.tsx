import React from "react"
import { Title } from "@mantine/core";
import { Recipe } from "../components/Recipe"
import { recipe } from "../mock/recipes";

type Props = {}

export function RecipeDisplay({}: Props) {
    return (
        <div>
            <Title order={3}>Recipes</Title>
            <Recipe recipe={recipe}/>

        </div>
    )
}