import styled from 'styled-components';

interface TitleProps {
  colorTitle: string;
}

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const TitleCompany = styled.h1<TitleProps>`
  margin-right: 10px;
  color: ${(p) => p.colorTitle};
`;
export const TitleProduct = styled.h1<TitleProps>`
  font-weight: 300;
  color: ${(p) => p.colorTitle};
`;
