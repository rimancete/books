import styled from 'styled-components';

interface HomeContainerProps {
  width: number;
}

export const HomeContainer = styled.div<HomeContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(p) => (p.width > 768 ? 'flex-end' : 'center')};
`;
