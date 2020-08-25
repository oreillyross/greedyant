import React from "react";
import styles from "./Container.module.css";
import ContentBox from "./ContentBox";

export default function Container() {
  return (
    <div className={styles.container}>
      <ContentBox />
      <ContentBox />
      <ContentBox />
      <ContentBox />
      <ContentBox />
    </div>
  );
}
