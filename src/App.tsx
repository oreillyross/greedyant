import React from "react";
import { IngredientList } from "./components/IngredientsList";
import { PictureChooser } from "./components/PictureChooser";
import { Logo } from "./components/Logo";
import { IngredientForm } from "./components/IngredientForm";
import { Header } from "./components/Header";
import styled from "styled-components";
import { Footer } from "./components/Footer";
import { IngredientDisplay } from "./components/IngredientDisplay";

const StyledStrap = styled.div`
  font-size: 16px;
  color: white;
`;

const StyledApp = styled.div`
  padding: 12px;
  display: flex;
  border: 1px solid black;
  align-items: center;
  justify-items: center;
  color: #bedbbb;
  background-color: #92817a;
`;

export default function App() {
  return (
    <>
      <StyledApp>
        <Logo /> <Header />
        <StyledStrap>The app that makes cooking what you got in the pantry a breeze.</StyledStrap>
      </StyledApp>
      {/* <IngredientList />
      <IngredientForm />
      <Footer/> */}
      <IngredientDisplay />
    </>
  );
}
