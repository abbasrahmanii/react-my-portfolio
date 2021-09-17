import React from "react";
import me from "../imgs/Untitled-2.png";
import styled from "styled-components";

const Nav = () => {
  return (
    <Navbar>
      <Logo>
        <img src={me} alt="me" />
      </Logo>
      <Navigation>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Works</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </Navigation>
      <SocialMedia>
        <li>
          <a href="#">dribbble</a>
        </li>
        <li>
          <a href="#">twitter</a>
        </li>
        <li>
          <a href="#">instagram</a>
        </li>
      </SocialMedia>
    </Navbar>
  );
};

export const Navbar = styled.div`
  min-height: 10vh;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  color: red;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #ffca85;
  }
`;

export const Navigation = styled.ul`
  display: flex;
  li {
    margin-left: 1.5rem;
  }
`;

export const SocialMedia = styled.ul`
  display: flex;
  li {
    margin-left: 1.5rem;
  }
`;

export default Nav;
