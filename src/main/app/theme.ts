import {BaseTheme, FontSizesThemeProps} from '../idqFela/baseTheme'

interface AppFontSizeThemeProps extends FontSizesThemeProps {
  extraBig: number | string,
}

export declare interface Themeable {
  theme: Theme,
}

export declare interface Theme extends BaseTheme {
  fontSizes: AppFontSizeThemeProps
}

const appTheme = {
  colors: {
    text: 'blue',
    disabled: '#727272',
    bgLight: '#d5d5d5',
  },
  fonts: {
    text: 'sans-serif',
    special: 'serif',
  },
  layout: {
    actionBarHeight: 50,
    menuWidth: 300,
  },
}

export default appTheme
