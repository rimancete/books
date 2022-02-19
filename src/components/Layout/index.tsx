import * as Styled from './styles';
import { useEffect, useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  bgImage?: string;
}

export const Layout = ({ children, bgImage }: LayoutProps) => {
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
  return (
    <Styled.Container>
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
        <></>
      )}
      <div className="content">{children}</div>
    </Styled.Container>
  );
};
