import styled from 'styled-components';

interface TitleProps {
  colorTitle: string;
}

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  img {
    margin-right: 10px;
  }
`;
export const TitleProduct = styled.h1<TitleProps>`
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.sizes.large};
  color: ${(p) => p.colorTitle};
`;
