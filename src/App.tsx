import React from "react";

import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import { SearchBox } from './components/SearchBox'

const demoData = [{ name: "Bob" }, { name: "Jimmy" }, { name: "Jones" }];

export default function App() {
  return (
    <div>
      <Header />
      <SearchBox/>
      <Container content={demoData} />
      <Footer/>
    </div>
  );
}
