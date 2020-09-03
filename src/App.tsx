import React from "react";

import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

const demoData = [{ name: "Bob" }, { name: "Jimmy" }, { name: "Jones" }];

export default function App() {
  return (
    <div>
      <Header />
      <Container contents={{}} />
      <Footer/>
    </div>
  );
}
