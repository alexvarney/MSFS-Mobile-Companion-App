import React from "react";
import styled, { css } from "styled-components";

export const ButtonStyles = css`
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.colors.grey_dark};
  background-color: ${(props) => props.theme.colors.yellow_primary};
  outline-color: ${(props) => props.theme.colors.yellow_primary};
  font-size: 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 600;

  :hover {
    filter: brightness(0.9);
  }

  :active {
    filter: brightness(0.75);
  }
`;

const Button = styled.button`
  ${ButtonStyles}
`;

export default Button;
