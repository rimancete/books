import styled, { css } from 'styled-components';

export const PageSelectorControl = styled.div``;
export const PageSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 190px;
  margin-top: 20px;
  h3 {
    margin: 0;
  }
`;
export const PageSelectorContainerText = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: 400;
  `}
`;
