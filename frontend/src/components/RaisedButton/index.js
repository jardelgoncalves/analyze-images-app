import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #79bd9a;
  height: 50px;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 6px;
  margin-bottom: 16px;
  pointer-events: all;

  :hover {
    opacity: 0.8;
    transition: opacity ease-in-out 0.2s;
  }

  :disabled {
    background-color: #e6e6e6;
    pointer-events: none;
  }
`;

export const RaisedButton = ({ onClick, loading }) => {
  return (
    <ButtonStyle onClick={onClick} disabled={loading}>
      Analisar imagem
    </ButtonStyle>
  )
}
