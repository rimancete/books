import { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import { LoginForm } from '../../components/LoginForm';
import { getWindowsDimensions } from '../../services/screen-size.service';
import { LoginContainer } from './styles';

export function Login() {
  const [width, setWidth] = useState<number>();
  const [heigth, setHeigth] = useState<number>();

  useEffect(() => {
    const handleSize = () => {
      const { width, height } = getWindowsDimensions();
      setWidth(width);
      setHeigth(height);
    };
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeigth(window.innerHeight);
  }, []);

  return (
    <Layout bgImage="/assets/images/background-mobile.svg">
      <LoginContainer
        heigth={heigth ? heigth : window.innerHeight}
        width={width ? width : window.innerWidth}
      >
        <LoginForm />
      </LoginContainer>
    </Layout>
  );
}
