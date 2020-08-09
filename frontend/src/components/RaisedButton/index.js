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

  :hover {
    opacity: 0.8;
    transition: opacity ease-in-out 0.2s;
  }
`;

export const RaisedButton = ({ onClick }) => {
  return (
    <ButtonStyle onClic={onClick}>
      Analisar imagem
    </ButtonStyle>
  )
}
