import {SGTheme} from './StyleGuideTypes'

const fontFamilies = {
  base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, ' +
    '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
}

export const styleGuideThemeLight: SGTheme = {
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
}
