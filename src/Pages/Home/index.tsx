import { useEffect, useState } from 'react';
import { getCurrentUser } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { env } from '../../environments';
import { Layout } from '../../components/Layout';
import { HomeContainer } from './styles';
import { getWindowsDimensions } from '../../services/screen-size.service';

export function Home() {
  const currentUser = getCurrentUser();
  const [width, setWidth] = useState<number>();
  const [heigth, setHeigth] = useState<number>();

  const navigate = useNavigate();

  useEffect(() => {
    !currentUser && navigate(`${env.ROUTER_UTILS.base.login}`);
  });
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
    <Layout hasHeader={true}>
      <HomeContainer heigth={heigth ? heigth : window.innerHeight}>
        <h1>Home Content</h1>
      </HomeContainer>
    </Layout>
  );
}
