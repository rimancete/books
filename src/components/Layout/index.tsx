import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { getWindowsDimensions } from '../../services/screen-size.service';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
  bgImage?: string;
  hasHeader?: boolean;
  isHome?: boolean;
}

export const Layout = ({
  children,
  bgImage,
  hasHeader,
  isHome,
}: LayoutProps) => {
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    const handleSize = () => {
      const { width } = getWindowsDimensions();
      setWidth(width);
    };

    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);
  return (
    <Styled.Container hasHeader={hasHeader}>
      {bgImage ? (
        width ? (
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
                window.innerWidth < 768
                  ? bgImage
                  : '/assets/images/background.png'
              }
              width={window.innerWidth}
              height={'100%'}
            />
          </Styled.BGImage>
        )
      ) : isHome && window.innerWidth > 768 ? (
        <Styled.BGImage>
          <img
            src={'/assets/images/background-home.png'}
            width={window.innerWidth}
            height={'100%'}
          />
        </Styled.BGImage>
      ) : (
        <Styled.BGImage>
          <Styled.BackgroundGradient
            style={{
              width: window.innerWidth,
            }}
          ></Styled.BackgroundGradient>
        </Styled.BGImage>
      )}

      {hasHeader && <Header width={width ? width : window.innerWidth} />}
      <div className="content">{children}</div>
    </Styled.Container>
  );
};
