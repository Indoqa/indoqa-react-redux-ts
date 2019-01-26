import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {FontSize, FontSizes} from '../types'
import TextSample from './TextSample'
import {headerText, longText} from './TextSpecimen'

interface Props {
  textFont: IStyle,
  headlineFont: IStyle,
  fontSizes: FontSizes
  textFontSize: FontSize,
}

const Container: React.FC = ({children}) => {
  const style: IStyle = {
    maxWidth: 650,
  }
  return <FelaComponent style={style}>{children}</FelaComponent>
}

const FontMixContent: React.FC<Props> = ({textFont, headlineFont, fontSizes, textFontSize}) => {
  const extendedHeadlineFont: IStyle = {
    ...headlineFont,
    fontSize: fontSizes.length > 0 ? fontSizes[0] : '30px',
  }
  const extendedTextFont: IStyle = {
    ...textFont,
    fontSize: textFontSize ? textFontSize : '14px',
  }

  return (
    <Container>
      <TextSample fontStyles={extendedHeadlineFont}>
        {headerText}
      </TextSample>
      <TextSample fontStyles={extendedTextFont}>
        {longText}
      </TextSample>
    </Container>
  )
}

export default FontMixContent
