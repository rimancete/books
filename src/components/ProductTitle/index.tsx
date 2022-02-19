import { Title, TitleCompany, TitleProduct } from './styles';

interface ProductTitleProps {
  colorTitle: string;
}

export function ProductTitle({ colorTitle }: ProductTitleProps) {
  return (
    <Title>
      <TitleCompany colorTitle={colorTitle}>ioasys</TitleCompany>
      <TitleProduct colorTitle={colorTitle}>Books</TitleProduct>
    </Title>
  );
}
