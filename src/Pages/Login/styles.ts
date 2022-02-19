import styled from 'styled-components';

interface LoginContainerProps {
  heigth?: number;
  width?: number;
}

export const LoginContainer = styled.div<LoginContainerProps>`
  width: 100%;
  display: flex;
  justify-content: ${(p) =>
    p.width && p.width > 768 ? 'flex-start' : 'center'};
  align-items: center;
  height: ${(p) => p.heigth}px;
  margin-left: ${(p) => (p.width && p.width > 768 ? '100px' : '')};
`;
