import React from "react";
import { Burger } from "@mantine/core";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <Burger opened={false} />

      <section className="navbar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>{" "}
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>{" "}
          <Link to="/ingredients">
            <li>Ingredients</li>
          </Link>
          <li>Login/manage</li>
        </ul>
      </section>
    </div>
  );
}
