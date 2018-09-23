const typeScaleFactor = 1.333
const typeScaleBase = 14
const typeScale = (level: number) => typeScaleBase + (typeScaleFactor * level)
const standardFont = 'sans-serif'

export declare interface FontSizesThemeProps {
  verySmall: number | string,
  small: number | string,
  text: number | string,
  big: number | string,
  veryBig: number | string,
}

export declare interface BaseTheme {
  fontSizes: FontSizesThemeProps,
  fonts: {
    text: string,
  },
  colors: {
    text: string,
  },
  spacing: {
    space0: number | string,
    space1: number | string,
    space2: number | string,
    space3: number | string,
    space4: number | string,
  }
  layout: {}
}

const baseTheme: BaseTheme = {
  fontSizes: {
    text: typeScale(0),
    big: typeScale(1),
    veryBig: typeScale(2),
    small: typeScale(-1),
    verySmall: typeScale(-2),
  },
  fonts: {
    text: standardFont,
  },
  colors: {
    text: '#000000',
  },
  spacing: {
    space0: 0,
    space1: '0.5rem',
    space2: '1rem',
    space3: '2rem',
    space4: '4rem',
  },
  layout: {

  },
}

export default baseTheme
