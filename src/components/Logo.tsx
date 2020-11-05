import * as React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  margin: 24px;
  background-color: #8db596;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 68px;
  font-weight: bold;
  border-radius: 15px;
  color: white;
  height: 120px;
  width: 120px;
  text-align: center;
  line-height: 120px;
`;
const Logo = () => {
  return <StyledLogo>G</StyledLogo>;
};

export { Logo };
