import React from "react";
import styles from "./Container.module.css";

// (array[{}]?) => AddBox ? ContentBox[]
export default function Container({ content }) {
  return <div className={styles.container}></div>;
}
