import React from "react";
import { Burger, ElementsGroup, Badge } from "@mantine/core";


export function Navbar() {
  return (
    <div>
      <Burger opened={false} />

      <section className="navbar">
          <ul role="list">
              <li role="listitem">Recipes</li>
              <li role="listitem">Ingredients</li>
              <li role="listitem">Login/manage</li>
          </ul>
      </section>
    </div>
  );
}

