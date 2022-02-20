import styled from 'styled-components';

interface HomeContainerProps {
  heigth?: number;
  // width?: number;
}

export const HomeContainer = styled.div<HomeContainerProps>`
  /* width: 100%; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center;
  align-items: center;
  height: ${(p) => p.heigth}px; */
`;
