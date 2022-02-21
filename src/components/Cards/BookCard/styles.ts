import styled, { css } from 'styled-components';

export const BookCardContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: 20px 15px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 100ms ease-in-out;
    height: 180px;
    :hover {
      transform: scale(1.05);
    }
  `}
`;

export const BookCardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BookCardContentImage = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;

  img {
    width: 81px;
    height: 122px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
`;

export const BookCardContentData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2,
  h3 {
    margin: 0;
  }
`;

export const BookCardContentDataTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookCardContentDataTitleText = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: 500;
  `}
`;
export const BookCardContentDataAuthorText = styled.h2`
  ${({ theme }) => css`
    font-weight: 400;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.secondaryColor};
  `}
`;

export const BookCardContentDataBody = styled.div`
  margin-top: 10px;
`;

export const BookCardContentDataBodyText = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.xLightGray};
    font-weight: 400;
  `}
`;

export const BookCardContentImageDefault = styled.div`
  ${({ theme }) => css`
    width: 81px;
    height: 122px;
    background-color: ${theme.colors.secondaryColor};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  `}
`;
