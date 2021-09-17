import React from "react";
import styled from "styled-components";
import me from "../imgs/Untitled-2.png";

const Main = () => {
  return (
    <MainStyle>
      <Description>
        <h1>Building digital</h1>
        <h1>products,brands</h1>
        <h1>
          <span>1</span> experience.
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          tempore, vel enim tenetur, odit hic repellat facilis dicta reiciendis.
        </p>
        <form action="">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
          />
          <button type="submit">Connect With Me</button>
        </form>
      </Description>
      <Image>
        <img src={me} alt="me" />
      </Image>
    </MainStyle>
  );
};

export const MainStyle = styled.div`
  display: flex;
  width: 90%;
  min-height: 90vh;
  margin: 1rem auto;
  flex-wrap: wrap;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 25rem;
  margin-right: 2rem;
  h1 {
    font-size: 4.5rem;
    :last-of-type {
      color: #6839e9;
    }
  }
  p {
    margin: 2rem 0;
    font-size: 1.3rem;
  }
  form {
    display: flex;
    /* align-items: stretch; */
    input {
      width: 35%;
      padding: 0.75rem 1rem;
      border: 0;
      ::placeholder {
        color: #494949;
      }
    }
    button {
      padding: 0 1rem;
      margin-left: 0.75rem;
      background-color: #6839e9;
      color: #fff;
      border: 0;
    }
  }
`;
export const Image = styled.div`
  display: flex;
  flex: 1 20rem;
  height: 100%;
  /* height: auto; */
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export default Main;
