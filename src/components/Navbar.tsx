import React from "react";
import { Burger, ElementsGroup, Badge } from "@mantine/core";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <Burger opened={false} />

      <section className="navbar">
        <ul role="list">
        <li role="listitem">
            <Link to="/home">Home</Link>
          </li>{" "}
          <li role="listitem">
            <Link to="/recipes">Recipes</Link>
          </li>{" "}
          <Link to="/ingredients"><li role="listitem">Ingredients</li></Link>
          <li role="listitem">Login/manage</li>
        </ul>
      </section>
    </div>
  );
}
