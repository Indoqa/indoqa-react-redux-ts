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

const baseColors = {
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

const fontSizes: FontSizes = {
  text: typeScale(1),
  big: typeScale(2),
  veryBig: typeScale(3),
  extraBig: typeScale(4),
  small: typeScale(0),
  verySmall: typeScale(-1),
}

const theme: Theme = {
  fontSizes,
  fonts: {
    text: fontFamilies.text,
    special: fontFamilies.special,
  },
  fontStyles: {
    base: {
      fontFamily: fontFamilies.special,
      fontSize: fontSizes.text,
      lineHeight: 1.2,
      fontWeight: 400,
      color: baseColors.black_2,
    },
    headline: {
      fontFamily: fontFamilies.text,
      fontSize: fontSizes.big,
      lineHeight: 1.2,
      fontWeight: 700,
      color: baseColors.black_2,
    },
  },
  colors: {
    primary: baseColors.blue_2,
    primaryDark: baseColors.blue_3,
    primaryLight: baseColors.blue_1,
    accent: baseColors.orange_1,
    text: baseColors.black_1,
    textSecondary: baseColors.grey_1,
    divider: baseColors.white_1,
  },
  spacing: {},
  layout: {
    actionBarHeight: 50,
    menuWidth: 300,
  },
}

export default theme
