import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1 className={styles.Header}>greedyAnt</h1>
      <h3>
        <nav>
          <Link to="/">Home </Link>
          <Link to="about">About </Link>
          <Link to="recipe">Recipe </Link>
        </nav>
      </h3>
    </>
  );
}
