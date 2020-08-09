import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  margin-top: 16px;
  span.label {
    font-size: 20px;
    color: #79bd9a;
    font-weight: bold;
    margin-bottom: 8px;
  }
`;

const moveAnimation = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

export const Bar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #dae6e0;
  border-radius: 10px;
  position: relative;
  div {
    height: 20px;
    background-color: #79bd9a;
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: ${({ percentage }) => `${percentage}%`}; 
    animation: ${moveAnimation} 1s ease-in-out;
    animation-fill-mode:both;
    span {
      color: #fff;
      font-size: 12px;
      margin-right: 8px;
    }
  }
`;