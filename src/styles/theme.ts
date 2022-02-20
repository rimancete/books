export const theme = {
  colors: {
    primaryColor: '#333333',
    secondaryColor: '#B22E6F',
    white: '#FFFFFF',
    lightGray: 'rgba(51, 51, 51, 0.2)',
    mediumGray: '#C096A7',
    darkGray: 'rgba(0, 0, 0, 0.4)',
    messageDiv: 'rgba(255, 255, 255, 0.4)',
  },
  font: {
    family: {
      default: "'Heebo', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    sizes: {
      xsmall: '1.4rem',
      small: '1.6rem',
      medium: '2rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMinimum: '(max-width: 768px)',
    lteMedium: '(max-width: 1024px)',
    lteLarge: '(min-width: 1024px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;
