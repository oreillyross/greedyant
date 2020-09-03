import React from "react";
import styles from "./AddBox.module.css";

export default function AddBox(props: {}) {
  return <div className={styles.AddBox}>
    <img src='plus-circle.svg' alt='add item'/>
  </div>;
}
