import React from 'react';
import styled from 'styled-components';

const AlertStyle = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  font-size: 15px;
  background-color: #e37878;
  color: #fff;
`;

export const Alert = ({ text }) => {
  return (
    text && (
      <AlertStyle>
        {text}
      </AlertStyle>
    )
  )
}
