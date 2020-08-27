import React from "react";
import styles from "./Container.module.css";
import ContentBox from "./ContentBox";
import AddBox from './AddBox'



// (array[{}]?) => AddBox ? ContentBox[]
export default function Container({contents}) {
  return (
    <div className={styles.container}>
     {(!contents) ? <AddBox/> : contents.map(c => {
       return <ContentBox key={c.name} content={c}/>
     })}
    </div>
  );
}
