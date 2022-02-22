import styled, { css } from 'styled-components';

export const InputContent = styled.div`
  width: 100%;
`;
export const InputLabel = styled.h3`
  margin: 0;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.tertiaryColor};
    font-weight: 400;
  `}
`;
export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Input = styled.input`
  width: 100%;
`;
export const Button = styled.button``;
