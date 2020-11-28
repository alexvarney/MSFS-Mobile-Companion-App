import React from "react";
import styled from "styled-components";
import Logo from "../../../../static/img/fs_mca_logo.png";
import Button from "../atoms/button";

const NavContainer = styled.nav`
  display: flex;
  background-color: ${(props) => props.theme.colors.grey_dark};
  padding: 0.25rem;
  align-items: center;

  & img {
    max-height: 3rem;
  }

  & > * + * {
    margin-left: 16px;
  }
`;

export default function Nav() {
  return (
    <NavContainer>
      <img src={Logo} />
      <Button>Map</Button>
      <Button>Button</Button>
    </NavContainer>
  );
}
