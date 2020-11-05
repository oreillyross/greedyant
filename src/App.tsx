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
  line-height: 1.3
`;

const StyledBody = styled.section`
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;  
`

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
      <StyledBody>
      <IngredientDisplay />
      </StyledBody>
    </>
  );
}
