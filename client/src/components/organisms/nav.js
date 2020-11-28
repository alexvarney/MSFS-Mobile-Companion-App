import React from "react";
import styled from "styled-components";
import Logo from "../../../../static/img/fs_mca_logo.png";
import { ButtonStyles } from "../atoms/button";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  display: flex;
  background-color: ${(props) => props.theme.colors.grey_dark};
  padding: 0.5rem;
  align-items: center;

  & img {
    max-height: 2rem;
  }

  & > * + * {
    margin-left: 0.75rem;
  }
`;

const Button = styled(Link)`
  ${ButtonStyles}
  text-decoration: none;
`;

export default function Nav() {
  return (
    <NavContainer>
      <Link to="/">
        <img src={Logo} />
      </Link>
      <Button to="/">Map</Button>
      <Button to="/nav">NAV</Button>
    </NavContainer>
  );
}
