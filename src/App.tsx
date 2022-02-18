import styled from 'styled-components';
import { Login } from './Pages/Login';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Login />
    </Container>
  );
};

export default App;
