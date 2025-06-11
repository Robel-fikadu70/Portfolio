import React from 'react';
import styled from 'styled-components';

const Shineytxt = ({Value}) => {
  return (
    <StyledWrapper className="w-fit">
      <span href="#" className="btn-shine">{Value}</span>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.span`
  .btn-shine {
    position: relative;
    // top: 50%;
    // left: 50%;
    transform: translate(-50%, -50%);
    padding: 12px 12px;
    margin: 20px;
    color: #fff;
    // border: 1px solid white;
    // border-radius: 22px;
    background: linear-gradient(to right, #9f9f9f 0, #fff 10%, #868686 20%);
    background-position: 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 6s infinite linear;
    animation-fill-mode: forwards;
    -webkit-text-size-adjust: none;
    font-weight: 600;
    font-size: 19px;
    text-decoration: none;
    white-space: nowrap;
    font-family: "Poppins", sans-serif;
  }
  @-moz-keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  }
  @-webkit-keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  }
  @-o-keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  }
  @keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  }`;

export default Shineytxt;
