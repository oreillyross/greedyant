import * as React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  font-size: 48px;
  width: 90%;
  color: var(--primary-font-color);
  text-align: center;
`;



const Header = () => {
  return (
    <>
      <StyledHeader>Greedy Ant</StyledHeader>
    </>
  );
};

export { Header };
