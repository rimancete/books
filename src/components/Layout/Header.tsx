import { theme } from '../../styles/theme';
import { ProductTitle } from '../ProductTitle';
import {
  HeaderContent,
  UserDataContent,
  UserDataContentGreetingsText,
  UserDataContentGreetings,
} from './styles';
import { FiLogOut } from 'react-icons/fi';
import { logout } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { env } from '../../environments';

import { getCurrentUser } from '../../services/auth.service';

interface HeaderProps {
  width: number;
}

export function Header({ width }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <HeaderContent>
      <ProductTitle colorTitle={theme.colors.primaryColor} />
      <UserDataContent>
        {width > 768 && (
          <UserDataContentGreetings>
            {getCurrentUser()?.gender === 'M' ? (
              <UserDataContentGreetingsText>
                Bem vindo, &nbsp;
              </UserDataContentGreetingsText>
            ) : (
              <UserDataContentGreetingsText>
                Bem vinda, &nbsp;
              </UserDataContentGreetingsText>
            )}
            <UserDataContentGreetingsText style={{ fontWeight: 500 }}>
              {`${getCurrentUser()?.name}!`}
            </UserDataContentGreetingsText>
          </UserDataContentGreetings>
        )}
        <FiLogOut
          onClick={() => (logout(), navigate(`${env.ROUTER_UTILS.base.login}`))}
          size={40}
          className="icon-pressable"
          style={{ padding: 8 }}
        />
      </UserDataContent>
    </HeaderContent>
  );
}
