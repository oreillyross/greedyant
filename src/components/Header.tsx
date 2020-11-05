import * as React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  font-size: 48px;
  width: 90%;
  color: #bedbbb;
  text-align: center;
  border: 1px solid black;
`;



const Header = () => {
  return (
    <>
      <StyledHeader>Greedy Ant</StyledHeader>
    </>
  );
};

export { Header };
