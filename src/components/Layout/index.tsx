import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { getWindowsDimensions } from '../../services/screen-size.service';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
  bgImage?: string;
  hasHeader?: boolean;
}

export const Layout = ({ children, bgImage, hasHeader }: LayoutProps) => {
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
  return (
    <Styled.Container hasHeader={hasHeader}>
      {bgImage ? (
        width && heigth ? (
          <Styled.BGImage>
            <img
              src={width < 768 ? bgImage : '/assets/images/background.png'}
              width={width}
              height={'100%'}
            />
          </Styled.BGImage>
        ) : (
          <Styled.BGImage>
            <img
              src={
                width && width < 768 ? bgImage : '/assets/images/background.png'
              }
              width={window.innerWidth}
              height={'100%'}
            />
          </Styled.BGImage>
        )
      ) : (
        <Styled.BGImage>
          <Styled.BackgroundGradient
            style={{
              width: window.innerWidth,
            }}
          ></Styled.BackgroundGradient>
        </Styled.BGImage>
      )}

      {hasHeader && <Header />}
      <div className="content">{children}</div>
    </Styled.Container>
  );
};
