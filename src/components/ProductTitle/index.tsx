import { Title, TitleProduct } from './styles';

interface ProductTitleProps {
  colorTitle: string;
}

export function ProductTitle({ colorTitle }: ProductTitleProps) {
  return (
    <Title>
      <img src="/assets/images/logo.png" alt="" />
      <TitleProduct colorTitle={colorTitle}>Books</TitleProduct>
    </Title>
  );
}
