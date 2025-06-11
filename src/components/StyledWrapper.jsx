import React from 'react';
import styled from 'styled-components';

const StyledButton = ({name, href}) => {
  return (
    <StyledWrapper>
      <a href={href} target="_blank">
        {name}
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  a {
    font-size: 12px;
    color: #e1e1e1;
    font-weight: 200;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }

  a:focus,
  a:hover {
    color: #fff;
  }

  a:focus:after,
  a:hover:after {
    width: 100%;
    left: 0%;
  }

  a:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #fff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }`;

export default StyledButton;
