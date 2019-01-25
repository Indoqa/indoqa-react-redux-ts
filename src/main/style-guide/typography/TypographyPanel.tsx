import {Flex} from 'indoqa-react-fela'
import * as React from 'react'
import {WithSGTheme, withSGTheme} from '../sgtheme/withSGTheme'
import {Font, FontSizes} from '../types'
import HeadlineFontStylePanel from './HeadlineFontStylePanel'
import TextFontStylePanel from './TextFontStylePanel'

interface Props extends WithSGTheme {
  textFonts: Font[],
  headlineFonts: Font[],
  fontSizes: FontSizes,
}

const renderTextFont = (font: Font) => {
  return <TextFontStylePanel key={font.name} name={font.name} fontStyles={font.fontStyle} />
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

const TypographyPanel: React.FC<Props> = ({textFonts, headlineFonts, fontSizes}) => {
  return (
    <React.Fragment>
      <Flex>
        {headlineFonts.map((font) => renderHeadlineFont(font, fontSizes))}
      </Flex>
      <Flex>
        {textFonts.map((font) => renderTextFont(font))}
      </Flex>
    </React.Fragment>
  )
}

export default withSGTheme(TypographyPanel)
