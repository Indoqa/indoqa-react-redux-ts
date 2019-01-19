import {SGTheme} from './SGTheme'

const fontFamilies = {
  base: 'Lato, sans-serif',
  heading: 'Oswald, sans-serif',
}

export const lightTheme: SGTheme = {
  backgroundColor: '#ffffff',
  menuBackgroundColor: '#f1f3f5',
  menuShadow: 'none',
  fontPanelBackgroundColor: '#ffffff',
  fontPanelHeaderBackgroundColor: '#868e96',
  fontPanelHeaderColor: '#ffffff',
  colorPanelBorder: 'solid 1px #dedede',
  topMenuHeight: '5rem',
  fontStyles: {
    base: {
      fontFamily: fontFamilies.base,
      fontSize: '0.9rem',
      lineHeight: 1.2,
      color: '#495057',
    },
    h1: {
      fontFamily: fontFamilies.heading,
      fontSize: '1.2rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#868e96',
    },
    h2: {
      fontFamily: fontFamilies.heading,
      fontSize: '1.0rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#868e96',
    },
    h3: {
      fontFamily: fontFamilies.heading,
      fontSize: '0.8rem',
      lineHeight: 1.2,
      fontWeight: 700,
      color: '#868e96',
      textTransform: 'uppercase',
    },
  },
  fontFamilyCSSImports: 'https://fonts.googleapis.com/css?family=Lato|Oswald:700',
  spacing: {
    space0: '0',
    space1: '0.25rem',
    space2: '0.5rem',
    space3: '1rem',
    space4: '1.5rem',
  },
}
