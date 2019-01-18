import {Flex} from 'indoqa-react-fela'
import * as React from 'react'
import {SGTheme} from '../sgtheme/SGTheme'
import {WithSGTheme, withSGTheme} from '../sgtheme/withSGTheme'
import {Font} from '../types'
import FontStylePanel from './FontStylePanel'

interface Props extends WithSGTheme {
  fonts: Font[],
}

const renderFont = (font: Font, sgTheme: SGTheme) => {
  return <FontStylePanel key={font.name} name={font.name} fontStyles={font.fontStyle} sgTheme={sgTheme} />
}

const TypographyPanel: React.FunctionComponent<Props> = ({fonts, sgTheme}) => {
  return (
    <React.Fragment>
      <Flex>
        {fonts.map((font) => renderFont(font, sgTheme))}
      </Flex>
    </React.Fragment>
  )
}

export default withSGTheme(TypographyPanel)
