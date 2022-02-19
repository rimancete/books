import { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import { LoginForm } from '../../components/LoginForm';
import { LoginContainer } from './styles';

export function Login() {
  const [width, setWidth] = useState<number>();
  const [heigth, setHeigth] = useState<number>();

  function getWindowsDimensions() {
    const { innerHeight: height, innerWidth: width } = window;
    return {
      width,
      height,
    };
  }

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
