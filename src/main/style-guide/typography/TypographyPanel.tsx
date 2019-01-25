import {Flex} from 'indoqa-react-fela'
import * as React from 'react'
import {SGTheme} from '../sgtheme/SGTheme'
import {WithSGTheme, withSGTheme} from '../sgtheme/withSGTheme'
import {Font} from '../types'
import TextFontStylePanel from './TextFontStylePanel'

interface Props extends WithSGTheme {
  textFonts: Font[],
}

const renderFont = (font: Font, sgTheme: SGTheme) => {
  return <TextFontStylePanel key={font.name} name={font.name} fontStyles={font.fontStyle} sgTheme={sgTheme} />
}

const TypographyPanel: React.FC<Props> = ({textFonts, sgTheme}) => {
  return (
    <React.Fragment>
      <Flex>
        {textFonts.map((font) => renderFont(font, sgTheme))}
      </Flex>
    </React.Fragment>
  )
}

export default withSGTheme(TypographyPanel)
