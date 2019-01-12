import {SGTheme} from './SGTheme'

const fontFamilies = {
  base: 'Roboto, sans-serif',
}

export const lightTheme: SGTheme = {
  backgroundColor: '#f1f3f5',
  menuBackgroundColor: '#f1f3f5',
  menuShadow: 'inset -26px 0px 22px -17px rgba(222,222,222,1)',
  fontPanelBackgroundColor: '#ffffff',
  fontPanelHeaderBackgroundColor: '#adb5bd',
  fontStyles: {
    base: {
      fontFamily: fontFamilies.base,
    },
  },
  fontFamilyCSSImports: 'https://fonts.googleapis.com/css?family=Roboto',
}
