import { useEffect } from 'react';
import { getCurrentUser } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { env } from '../../environments';

export function Home() {
  const currentUser = getCurrentUser();

  const navigate = useNavigate();

  useEffect(() => {
    !currentUser && navigate(`${env.ROUTER_UTILS.base.login}`);
  });
  return <h1>oi</h1>;
}
