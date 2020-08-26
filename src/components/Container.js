import React from "react";
import styles from "./Container.module.css";
import ContentBox from "./ContentBox";
import AddBox from './AddBox'

export default function Container() {
  return (
    <div className={styles.container}>
      <ContentBox />
      <ContentBox />
      <ContentBox />
      <ContentBox />
      <AddBox />
    </div>
  );
}
