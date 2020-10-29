import React from "react";
import styled from "styled-components";

const StyledAddBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: #525955;
  text-align: center;
  max-width: 240px;
  max-height: 240px;
  border: 1px solid black;
  border-radius: 5px;
`;

export default function AddBox(props: {}) {
  return (
    <StyledAddBox>
      <img src="plus-circle.svg" alt="add item" />
    </StyledAddBox>
  );
}
