import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.colors.grey_dark};
  background-color: ${(props) => props.theme.colors.yellow_primary};
  outline-color: ${(props) => props.theme.colors.yellow_primary};
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;

  :hover {
    filter: brightness(0.9);
  }

  :active {
    filter: brightness(0.75);
  }
`;

export default Button;
