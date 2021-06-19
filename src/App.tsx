import React from "react";
import { Logo } from "./components/Logo";
import { Header } from "./components/Header";
import styled from "styled-components";
import { IngredientDisplay } from "./components/IngredientDisplay";
import { RecipeDisplay } from "./components/RecipeDisplay";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

const uri = "http://localhost:4000";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri,
});

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
  line-height: 1.3;
`;

const StyledBody = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Router>
          <StyledApp>
            <Logo /> <Header />
            <StyledStrap>
              The app that makes cooking what you got in the pantry a breeze.
            </StyledStrap>
          </StyledApp>
          <Navbar />
          <Route path="/ingredients">
            <IngredientDisplay />
          </Route>
          <Route path="/recipes">
            <RecipeDisplay />
          </Route>
        </Router>
      </ApolloProvider>
    </>
  );
}
