import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0% {
    top: 60px;
    left: 60px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 120px;
    height: 120px;
    opacity: 0;
  }
`;

export const Pulse = styled.div`
  display: inline-block;
  position: relative;
  width: 120px;
  height: 120px;
  div {
    position: absolute;
    border: 4px solid #79bd9a;
    opacity: 1;
    border-radius: 50%;
    animation: ${pulseAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;