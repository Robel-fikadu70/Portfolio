import React from "react";
import styled from "styled-components";

const Ccard = () => {
  return (
    <StyledWrapper className=" hidden md:block">
      <div className="card">
        <div className="align">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>
        <h1>Personal Reflection(Hover)</h1>
        <p>
          This project is very meaningful to me, because it's actually the first
          project I built using a programming language. Before this, I had only
          written small bits of code while learning the basics. This was my
          first time taking on a real-world problem, breaking it down into
          steps, and writing an actual system from scratch. 
        </p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    height: 220px;
    padding: 0.5rem;
    background: rgba(198, 198, 198, 0.34);
    border-radius: 12px;
    backdrop-filter: blur(5px);
    border-bottom: 3px solid rgba(255, 255, 255, 0.44);
    border-left: 2px rgba(255, 255, 255, 0.545) outset;
    box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.28);
    transform: skewX(10deg);
    transition: width 1.9s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      height 2s ease-out, transform 1s ease;
    overflow: hidden;
    color: white;
  }

  .card:hover {
    width: 400px;
    height: 300px;
    transform: skew(0deg);
  }

  .align {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-self: flex-start;
  }

  .red {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ff605c;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
  }

  .yellow {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ffbd44;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
  }

  .green {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #00ca4e;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
  }

  .card h1 {
    text-align: center;
    margin: 1.3rem;
    color: rgb(218, 244, 237);
    text-shadow: -10px 5px 10px rgba(0, 0, 0, 0.573);
  }
`;

export default Ccard;
