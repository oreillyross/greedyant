import * as React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  font-size: 48px;
  padding-top: 24px;
  text-align: center;
`;

const Header = () => {
    return <StyledHeader>Greedy Ant</StyledHeader>;
}

export { Header };
