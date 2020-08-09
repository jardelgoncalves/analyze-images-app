import styled, { css } from 'styled-components';

const centerCommon = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  ${centerCommon};
  width: 100%;
  padding: 50px;

  svg {
    width: 100px;
    height: 100px;
  }

  h2 {
      margin: 0;
      color: #79bd9a;
      font-size: 36px;
    }

  .container-result,
  .container-form {
    margin-bottom: 16px;
    ${centerCommon};
    max-width: 600px;
    width: 100%;
  }

  h2 {
    transition: font-size ease-in-out 0.2s;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 30px;
    }
  }
`;
