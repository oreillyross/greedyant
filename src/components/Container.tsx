import React from "react";
import styles from "./Container.module.css";
import ContentBox from "./ContentBox";
import AddBox from "./AddBox";

type BoxType = {
  name: string;
};

export default function Container({ content }: { content: BoxType[]} ) {
  return (
    <div className={styles.container}>
      {content.length === 0 ? (
        <AddBox />
      ) : (
        content.map((box) => <ContentBox key={box.name} name={box.name} />)
      )}
    </div>
  );
}
