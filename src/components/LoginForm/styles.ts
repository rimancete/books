import styled, { css } from 'styled-components';

export const LoginFormContent = styled.div`
  width: 100%;
  max-width: 500px;
  background: transparent;
  margin-right: 5px;
`;

export const Form = styled.form`
  width: 100%;
`;
export const Button = styled.button`
  font-weight: 600;
`;

export const InputContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${theme.colors.darkGray};
    padding: 10px 15px;
    border-radius: 5px;
    margin-bottom: 20px;
  `}
`;
export const FormErrorContent = styled.div`
  ${({ theme }) => css`
    width: 60%;
    align-items: center;
    background: ${theme.colors.messageDiv};
    padding: 10px;
    border-radius: 5px;
  `}
`;
export const ErrorMessage = styled.h4`
  margin: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const FormErrorContainer = styled.div`
  position: relative;
`;

export const FormErrorTriangle = styled.div`
  position: relative;
  left: 20px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 8px 8px 8px;
  border-color: transparent transparent
    ${({ theme }) => theme.colors.messageDiv} transparent;
`;
