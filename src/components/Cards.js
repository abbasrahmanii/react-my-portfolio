import React from "react";
import styled from "styled-components";

const Cards = () => {
  const data = [
    { number: "200+", title: "PROJECT COMPLETED" },
    { number: "12", title: "DESIGN AWWARDS" },
    { number: "10+", title: "YEARS EXPERIENCE" },
    { number: "72+", title: "HAPPY CLIENTS" },
  ];
  return (
    <CardStyle>
      <hr />
      <div>
        {data.map((simple, index) => (
          <div key={index}>
            <span>{simple.number}</span>
            <h5>{simple.title}</h5>
          </div>
        ))}
      </div>
      <hr />
    </CardStyle>
  );
};

export const CardStyle = styled.div`
  width: 90%;
  margin: 1rem auto;
  hr {
    margin: 1rem;
    width: 100%;
    margin: 1rem auto;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-width: 13rem;
    div {
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      margin-top: 0.75rem;
      span {
        padding: 0.5rem;
        color: #000;
        font-weight: bolder;
        font-size: 1.7rem;
      }
      h5 {
        color: #494949;
      }
    }
  }
`;

export default Cards;
