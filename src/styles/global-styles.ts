import { createGlobalStyle } from 'styled-components';
import { Theme } from '../types/styled-components';

export const GlobalStyles = createGlobalStyle<Theme>`
 *{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};

  }

  h1, h2, h3, h4, h5, h6 {
    margin: ${({ theme }) => theme.spacings.large} 0;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: 900
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
    font-size: 1em;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all, 0.3s;
    text-decoration: none;
    margin: 10px;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  button {
    color: ${({ theme }) => theme.colors.secondaryColor};
    cursor: pointer;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    border: none;
    padding: 10px 17px;
    font-size: ${({ theme }) => theme.font.sizes.xxsmall};
    /* transition: all, 0.3s; */
  }
  /* button:hover {
    background: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.white};
  }

  button:disabled {
      background: ${({ theme }) => theme.colors.mediumGray};
      cursor: not-allowed;
  } */

  input[type='text'],[type='password'] {
      font-size: ${({ theme }) => theme.font.sizes.xxsmall};
      width: 100%;
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.colors.white};
      padding: 5px 0px;
      &::placeholder {
        font-size: ${({ theme }) => theme.font.sizes.xsmall};
        color: ${({ theme }) => theme.colors.mediumGray};
      }
  }
  select {
      font-size: 1.25em;
      width: 170px;
      height: 51px;
      border-radius: 5px;
      padding: 5px 10px;
      background-color: white;
      margin-right: 15px;
      font-size: ${({ theme }) => theme.font.sizes.medium};
  }
  .pressable {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryColor};
    text-decoration: none;
    border-color: transparent;
    transition: all, 0.3s;
  }
  .pressable:hover {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
  .icon-pressable {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.lightGray};
    transition: all, 0.3s;
  }
  .icon-pressable:hover {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
  .icon-pressable--disabled {
    color: ${({ theme }) => theme.colors.xLightGray};
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.lightGray};
    cursor: not-allowed;
  }

  .btn-only-cancel {
    width: 200px;
  }
  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
