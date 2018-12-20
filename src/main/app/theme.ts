import {BaseColors, BaseFonts, BaseFontSizes, BaseTheme, typeScale} from 'indoqa-react-fela'
import {CSSProperties} from 'react'

interface FontSizes extends Partial<BaseFontSizes> {
  readonly extraBig: number | string,
}

interface Colors extends Partial<BaseColors> {
  readonly primary: string,
  readonly primaryDark: string,
  readonly primaryLight: string,
  readonly accent: string,
  readonly textSecondary: string
  readonly divider: string,
}

interface Fonts extends Partial<BaseFonts> {
  readonly special: string,
}

interface FontStyles {
  readonly base: CSSProperties,
  readonly headline: CSSProperties,
}

interface Layout {
  readonly actionBarHeight: number,
  readonly menuWidth: number,
}

export declare interface Theme extends BaseTheme {
  readonly fontSizes: FontSizes,
  readonly colors: Colors,
  readonly fonts: Fonts,
  readonly fontStyles: FontStyles,
  readonly layout: Layout,
}

const fontFamilies = {
  text: 'sans-serif',
  special: 'serif',
}

const colors = {
  black_1: '#000000',
  black_2: '#120012',
  grey_1: '#727272',
  grey_2: '#BDBDBD',
  white_3: '#d5d5d5',
  white_1: '#ffffff',
  blue_1: '#c5cae9',
  blue_2: '#3f51b5',
  blue_3: '#303f9f',
  orange_1: '#ff5722',
}

const theme: Theme = {
  fontSizes: {
    extraBig: typeScale(3),
  },
  fonts: {
    text: fontFamilies.text,
    special: fontFamilies.special,
  },
  fontStyles: {
    base: {
      fontFamily: fontFamilies.special,
      fontWeight: 400,
      color: colors.black_2,
    },
    headline: {
      fontFamily: fontFamilies.text,
      fontWeight: 700,
      color: colors.black_2,
    },
  },
  colors: {
    primary: colors.blue_2,
    primaryDark: colors.blue_3,
    primaryLight: colors.blue_1,
    accent: colors.orange_1,
    text: colors.black_1,
    textSecondary: colors.grey_1,
    divider: colors.white_1,
  },
  spacing: {},
  layout: {
    actionBarHeight: 50,
    menuWidth: 300,
  },
}

export default theme
