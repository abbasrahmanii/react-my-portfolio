import React from "react";
import styled from "styled-components";
import me from "../imgs/Untitled-2.png";
import { Link } from "react-router-dom";

const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <ContactUs>
      <MainContact>
        <Description>
          <h1>We've been</h1>
          <h3>wating for you.</h3>
          <p>
            Fill in the form or <a href="#">Send us an email</a>
          </p>
          <div>
            <h5>
              <span>1</span> 0990 80 90 422
            </h5>
            <h5>
              <span>2</span> absrn26@gmail.com
            </h5>
            <h5>
              <span>3</span> Qom, Iran
            </h5>
          </div>
        </Description>
        <Form onSubmit={submitHandler}>
          <h3>Send us a Message</h3>
          <form>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <input type="text" id="subject" name="name" placeholder="Subject" />
            <textarea placeholder="Tell me about your project ..."></textarea>

            <input type="submit" value="Send Message" />
          </form>
        </Form>
      </MainContact>
    </ContactUs>
  );
};

const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 55vh;
`;
const MainContact = styled.div`
  display: flex;
  min-height: 50vh;
  width: 80%;
  margin: 2rem auto 0 auto;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2 25rem;
  font-family: "Roboto", sans-serif;
  h1 {
    font-size: 4.2rem;
  }
  h3 {
    font-size: 3.2rem;
    color: #6839e9;
  }
  p {
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    a {
      color: #111;
      text-decoration: underline;
    }
  }
  h5 {
    font-size: 1.3rem;
    font-weight: 400;
    margin-top: 0.75rem;
  }
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 15rem;
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: "Roboto", sans-serif;
  }
  form {
    display: flex;
    flex-direction: column;
    input,
    textarea {
      display: block;
      padding: 1rem 1.5rem;
      margin-bottom: 0.6rem;
      background-color: #fff;
      color: #6839e9;
      border: 0;
      font-family: sans-serif;
      font-size: 0.9rem;
    }
    input[type="submit"] {
      background-color: #6839e9;
      color: #fff;
    }
  }
`;

export default Contact;
