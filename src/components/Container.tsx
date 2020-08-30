

import React from "react";
import styles from "./Container.module.css";
import ContentBox from "./ContentBox";
import AddBox from './AddBox'

type ContentProps = {
  content: {
    name: string
  }
}

// (array[{}]?) => AddBox ? ContentBox[]
export default function Container({content}: ContentProps) {
  return (
    <div className={styles.container}>
     {(!content) ? <AddBox/> : null}
    </div>
  );
}
