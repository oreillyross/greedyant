import React from "react";
import { IngredientList } from "./components/IngredientsList";
import { PictureChooser } from "./components/PictureChooser";
import { Logo } from "./components/Logo";
import { IngredientForm } from "./components/IngredientForm";
import { Header } from "./components/Header";
import styled from "styled-components";
import { Footer } from "./components/Footer";
import { IngredientDisplay } from "./components/IngredientDisplay";

const StyledApp = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: 250px 1fr;
`;

export default function App() {
  return (
    <>
      <StyledApp>
        <Logo /> <Header />
      </StyledApp>
      {/* <IngredientList />
      <IngredientForm />
      <Footer/> */}
      <IngredientDisplay/>

    </>
  );
}
