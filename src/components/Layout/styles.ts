import styled, { css } from 'styled-components';
interface ContainerProps {
  hasHeader?: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(p) => (p.hasHeader ? 'column' : '')};
  overflow: ${(p) => (!p.hasHeader ? 'auto' : '')};
  .content {
    align-self: ${(p) => (p.hasHeader ? 'center' : '')};
    max-width: 1180px;
    width: 89%;
    position: ${(p) => (!p.hasHeader ? 'absolute' : '')};
    left: ${(p) => (!p.hasHeader ? 0 : '')};
    ${({ theme }) => css`
      p {
        color: ${theme.colors.mediumGray};
      }

      @media ${theme.media.lteMinimum} {
        margin: ${theme.spacings.medium};
        input {
          &::placeholder {
            font-size: ${theme.font.sizes.small};
            color: ${({ theme }) => theme.colors.mediumGray};
          }
          p {
            font-size: ${theme.font.sizes.small};
          }
        }
      }
    `}
  }
`;

export const BGImage = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const BackgroundGradient = styled.div`
  height: 100%;
  background-color: #f5f5ee;
  background-image: linear-gradient(#f5f5ee, #f3e7f3);
`;

export const HeaderContent = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1180px;
  align-self: center;
  width: 89%;

  ${({ theme }) => css`
    @media ${theme.media.lteMinimum} {
      margin: 0 ${theme.spacings.medium};
    }
  `}
`;

export const UserDataContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const UserDataContentGreetings = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
`;
export const UserDataContentGreetingsText = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: 400;
  `}
`;
