import React from "react";
import styles from "./ContentBox.module.css";

export default function ContentBox(props) {
  return (
    <div data-testid='content-box' className={styles.ContentBox}>
     {props.content.name} 
    </div>
  );
}
 