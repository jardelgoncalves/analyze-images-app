import React from 'react';
import styled from 'styled-components';

const ImageStyle = styled.img`
  border: 1px solid #79bd9a;
  padding: 16px;

  border-radius: 8px;
  width: 100%;
  height: auto;
  object-fit: cover;
`;


export const Photo = ({ image }) => {
  return (
    <ImageStyle
        src={image}
    />
  )
}