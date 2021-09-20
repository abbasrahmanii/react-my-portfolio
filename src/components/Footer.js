import React from "react";
import styled from "styled-components";
import me from "../imgs/Untitled-2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="top">
        <div className="left">
          <img src={me} alt="me" />
          <h3>Abbas Rahmani</h3>
          <p>Front-End Developer</p>
          <p>Email me at</p>
          <span>absrn26@gmail.com</span>
        </div>
        <div className="right">
          <h1>Lets Talk!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A porro
            corporis adipisci! Accusamus, rerum voluptatum?
          </p>
          <div>
            <span>1</span> <span>2</span> <span>3</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Works</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <span>&copy; 2021 Abbas Rahmani</span>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  font-family: "Roboto", sans-serif;
  color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 35vh;
  background-color: #0a0016;
  width: 100%;
  padding: 1rem 15%;
  color: #fff;
  .top {
    display: flex;
    width: 100%;
    .left {
      flex: 1 15rem;
      img {
        width: 3.5rem;
        height: 3.5rem;
        background-color: #fff;
        border-radius: 50%;
      }
      p {
        font-size: 0.8rem;
        color: #9f92bb;
        :first-of-type {
          margin-bottom: 2rem;
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      flex: 1 15rem;
      justify-content: space-between;
      h1 {
        font-size: 4.5rem;
      }
    }
  }
  hr {
    margin: 1rem auto;
    width: 100%;
    color: #554c6d;
  }
  .footer-nav {
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      li {
        margin-right: 3rem;
        :last-of-type {
          margin-right: 0;
        }
      }
    }
  }
`;

export default Footer;
