

import React from "react";
import styles from "./Container.module.css";
import ContentBox from "./ContentBox";
import AddBox from './AddBox'

// (array[{}]?) => AddBox ? ContentBox[]
export default function Container({content}) {
  return (
    <div className={styles.container}>
     {(!content) ? <AddBox/> : null}
    </div>
  );
}
