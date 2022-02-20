import { theme } from '../../styles/theme';
import { ProductTitle } from '../ProductTitle';
import { HeaderContent, UserDataContent } from './styles';
import { FiLogOut } from 'react-icons/fi';

export function Header() {
  return (
    <HeaderContent>
      <ProductTitle colorTitle={theme.colors.primaryColor} />
      <UserDataContent>
        <FiLogOut size={40} className="icon-pressable" style={{ padding: 8 }} />
      </UserDataContent>
    </HeaderContent>
  );
}
