import React from "react";
import styles from "./Footer.module.css";

export default function ContentBox(props) {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2020. Made with ❤ by Ross O'Reilly.</p>
    </footer>
  );
}
