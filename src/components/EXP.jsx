import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="cards">
        {/* <div className="card red">
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
        <div className="card blue">
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div>
        <div className="card green">
          <p className="tip">Hover Me</p>
          <p className="second-text">Lorem Ipsum</p>
        </div> */}
        {/* <div className="flex flex-col md:flex-row justify-between card">
          <h1 className="text-2xl font-sans font-light my-4">
            Back-End Development
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-sans font-light">Nova Computech</p>
            <p className="text-xl font-sans font-extralight">
              Mar 2025 - Present (Part-time)
            </p>
          </div>
        </div> */}

        <div className="flex flex-col md:flex-row justify-between card">
          <h1 className="text-2xl font-sans font-light my-4">
            Power Platform Development - intern
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-sans font-light">CodePoint Creatives</p>
            <p className="text-xl font-sans font-extralight">
              Nov 2024 - Feb 2025
            </p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row justify-between card">
          <h1 className="text-2xl font-sans font-light my-4">
            Back-End Development
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-sans font-light">Nova Computech</p>
            <p className="text-xl font-sans font-extralight">
              Mar 2025 - Present (Part-time)
            </p>
          </div>
        </div>
        <hr /> 
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cards {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .nov {
    align-items: start;
  }

  .cards .red {
    background-color: #f43f5e;
  }

  .cards .blue {
    background-color: #3b82f6;
  }

  .cards .green {
    background-color: #22c55e;
  }

  .cards .card {
    display: flex;
    align-items: start;
    justify-content: space between;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    text-align: center;
    height: 100px;
    width: full;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 400ms;
  }

  .cards .card p.tip {
    font-size: 1em;
    font-weight: 700;
  }

  .cards .card p.second-text {
    font-size: 0.7em;
  }

  .cards .card:hover {
    transform: scale(1.1, 1.1);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
  }
`;

export default Card;
