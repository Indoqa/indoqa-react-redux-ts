import {IStyle} from 'fela'
import {Flex} from 'indoqa-react-fela'
import * as React from 'react'
import Section from '../Section'
import {SGTheme} from '../StyleGuideTypes'
import FontStylePanel from './FontStylePanel'

interface Props {
  fonts: Font[],
  sgTheme: SGTheme,
}

export interface Font {
  name: string,
  fontStyle: IStyle,
}

const renderFont = (font: Font, sgTheme: SGTheme) => {
  return <FontStylePanel key={font.name} name={font.name} fontStyles={font.fontStyle} sgTheme={sgTheme} />
}

export const TypographyPanel: React.FunctionComponent<Props> = ({fonts, sgTheme}) => {
  return (
    <React.Fragment>
      <Section>Typographie</Section>
      <Flex>
        {fonts.map((font) => renderFont(font, sgTheme))}
      </Flex>
    </React.Fragment>
  )
}
