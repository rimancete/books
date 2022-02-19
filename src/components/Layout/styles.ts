import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    overflow: auto;
    width: 100vw;
    .content {
      /* display: flex; */
      width: 100%;
      p {
        color: ${theme.colors.mediumGray};
      }

      @media ${theme.media.lteMinimum} {
        /* flex-direction: column; */
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
    }
  `}
`;

export const BGImage = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  height: 100%;
`;
