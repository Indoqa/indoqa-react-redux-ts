import {Flex} from 'indoqa-react-fela'
import * as React from 'react'
import {WithSGTheme, withSGTheme} from '../sgtheme/withSGTheme'
import {Font, FontMix, FontSizes} from '../types'
import FontMixPanel from './FontMixPanel'
import HeadlineFontStylePanel from './HeadlineFontPanel'
import TextFontStylePanel from './TextFontPanel'

interface Props extends WithSGTheme {
  textFonts: Font[],
  headlineFonts: Font[],
  fontSizes: FontSizes,
  fontMixes: FontMix[],
}

const renderTextFont = (font: Font) => {
  return (
    <TextFontStylePanel
      key={font.name}
      name={font.name}
      fontStyles={font.fontStyle}
    />
  )
}

const renderHeadlineFont = (font: Font, fontSizes: FontSizes) => {
  return (
    <HeadlineFontStylePanel
      key={font.name}
      name={font.name}
      fontStyles={font.fontStyle}
      fontSizes={fontSizes}
    />
  )
}

const renderFontMixes = (fontMix: FontMix, fontSizes: FontSizes) => {
  return (
    <FontMixPanel
      key={fontMix.name}
      fontMix={fontMix}
      fontSizes={fontSizes}
    />
  )
}

const TypographyPanel: React.FC<Props> = ({textFonts, headlineFonts, fontMixes, fontSizes}) => {
  return (
    <React.Fragment>
      <Flex>
        {headlineFonts.map((font) => renderHeadlineFont(font, fontSizes))}
      </Flex>
      <Flex>
        {textFonts.map((font) => renderTextFont(font))}
      </Flex>
      <Flex>
        {fontMixes.map((fontMix) => renderFontMixes(fontMix, fontSizes))}
      </Flex>
    </React.Fragment>
  )
}

export default withSGTheme(TypographyPanel)
