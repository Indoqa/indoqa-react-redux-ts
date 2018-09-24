import {BaseTheme, BaseFontSizes, BaseColors, BaseFonts, typeScale} from '../idqFela/baseTheme'

interface FontSizes extends Partial<BaseFontSizes> {
  readonly extraBig: number | string,
}

interface Colors extends Partial<BaseColors> {
  readonly disabled: string,
  readonly bgLight: string,
}

interface Fonts extends Partial<BaseFonts> {
  readonly special: string,
}

interface Layout {
  readonly actionBarHeight: number,
  readonly menuWidth: number,
}

export declare interface WithTheme {
  readonly theme: Theme,
}

export declare interface Theme extends BaseTheme {
  readonly fontSizes: FontSizes,
  readonly colors: Colors,
  readonly fonts: Fonts,
  readonly layout: Layout,
}

const theme: Theme = {
  colors: {
    text: 'blue',
    disabled: '#727272',
    bgLight: '#d5d5d5',
  },
  fonts: {
    text: 'sans-serif',
    special: 'serif',
  },
  fontSizes: {
    extraBig: typeScale(3),
  },
  layout: {
    actionBarHeight: 50,
    menuWidth: 300,
  },
}

export default theme
