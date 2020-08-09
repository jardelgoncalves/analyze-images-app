import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-color: #79bd9a;
  border-width: 2px;
  border-radius: 4px;
  height: 60px;
  padding: 0 8px;
  font-size: 18px;
  font-weight: bold;
  color: #79bd9a;
  margin-top: 50px;
`;

export const Input = ({ onChange, name, value }) => {
  return (
    <InputStyle
      onChange={onChange}
      name={name}
      value={value}
      placeholder="Insira a URL da imagem"
    />
  )
}