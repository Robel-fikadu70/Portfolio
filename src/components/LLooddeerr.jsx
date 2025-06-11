import React from 'react';
import styled from 'styled-components';

const Llloader = () => {
  const balls = [
    { color: '#ff6347', i: 12, d: '3.4s' },
    { color: '#00ced1', i: 18, d: '6.1s' },
    { color: '#000000', i: 10, d: '2.9s' },
    { color: '#000000', i: 16, d: '7.8s' },
    { color: '#000000', i: 14, d: '4.6s' },
    { color: '#00bfff', i: 11, d: '3.3s' },
    { color: '#7fff00', i: 17, d: '5.5s' },
    { color: '#dc143c', i: 13, d: '6.7s' },
    { color: '#8a2be2', i: 19, d: '8.2s' },
    { color: '#48d1cc', i: 15, d: '9.1s' },
    { color: '#ff4500', i: 14, d: '4.2s' },
    { color: '#00ff7f', i: 16, d: '5.8s' },
    { color: '#ba55d3', i: 10, d: '7.3s' },
    { color: '#1e90ff', i: 18, d: '6.4s' },
    { color: '#ffa500', i: 20, d: '10s' },
    { color: '#000000', i: 12, d: '3.7s' },
    { color: '#00fa9a', i: 11, d: '2.6s' },
    { color: '#000000', i: 17, d: '6.9s' },
    { color: '#000000', i: 13, d: '5.3s' },
    { color: '#000000', i: 19, d: '7.7s' },
  ];

  return (
    <StyledWrapper>
      <div className="container-loader">
        {balls.map((ball, index) => (
          <div
            key={index}
            className="ball"
            style={{
              '--color': ball.color,
              '--i': `${ball.i}px`,
              '--d': ball.d,
            }}
          />
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;

  .container-loader {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .ball {
    --size: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(var(--size) + var(--i));
    height: calc(var(--size) + var(--i));
    background-color: var(--color);
    border-radius: 50%;
    animation: move 40s linear infinite;
    animation-duration: var(--d);
    mix-blend-mode: overlay;
    filter: blur(80px);
    transform-origin: center;
  }

  .ball:nth-child(even) {
    animation-direction: reverse;
  }

  @keyframes move {
    0% {
      transform: translate(-50%, -50%) rotate(0deg) translateX(200px);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg) translateX(200px);
    }
  }
`;

export default Llloader;
