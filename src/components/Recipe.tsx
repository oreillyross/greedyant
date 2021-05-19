import React from "react";
import { css } from "@emotion/css";

const recipeStyle = css`
  border: 1px solid grey;
  padding: 0.3rem;
  width: 350px;
  margin: 0.2rem;
  p {
    padding: 0.4rem;
    float: left;
  }
  
`;

type Props = {
  recipe: {
    id: string;
    name: string;
    description: string;
    imagePath: string;
  };
};

export function Recipe({ recipe }: Props) {
  const { id, name, description, imagePath } = recipe;
  return (
    <div className={recipeStyle}>
      <section>
        <header>
          <h3>{name}</h3>
        </header>
        <img src={imagePath} width={300} height={300} />

        <p>{description}</p>
      </section>
    </div>
  );
}
