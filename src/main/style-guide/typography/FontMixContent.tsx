import {IStyle} from "fela"
import * as React from 'react'
import {FontSizes} from '../types'
import TextSample from './TextSample'
import {longText, shortText} from './TextSpecimen'

interface Props {
  textFont: IStyle,
  headlineFont: IStyle,
  fontSizes: FontSizes
}

const FontMixContent: React.FC<Props> = ({textFont, headlineFont, fontSizes}) => {
  const extendedHeadlineFont: IStyle = {
    ...headlineFont,
    fontSize: fontSizes.length > 0 ? fontSizes[0] : '30px',
  }
  return (
    <React.Fragment>
      <TextSample fontStyles={extendedHeadlineFont}>
        {shortText}
      </TextSample>
      <TextSample fontStyles={textFont}>
        {longText}
      </TextSample>
    </React.Fragment>
  )
}

export default FontMixContent
