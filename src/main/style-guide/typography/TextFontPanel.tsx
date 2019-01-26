import {IStyle} from 'fela'
import {Grid, Panel, Row} from 'indoqa-react-fela'
import * as React from 'react'
import {withSGTheme, WithSGTheme} from '../sgtheme/withSGTheme'
import FontStylePanel from './FontStylePanel'
import TextSample from './TextSample'
import {longText, longTextInlineStyle} from './TextSpecimen'

interface Props extends WithSGTheme {
  name: string,
  fontStyles: IStyle,
}

const TextFontPanel: React.FC<Props> = ({fontStyles, name}) => {
  return (
    <Grid spacing="1rem" fullWidth>
      <Row>
        <Panel>
          <FontStylePanel name={`${name} / plain`}>
            <TextSample fontStyles={fontStyles}>
              The quick brown fox jumps over the lazy dog.
            </TextSample>
            <TextSample fontStyles={fontStyles}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
              abcdefghijklmnopqrstuvwxyz<br/>
              0123456789<br/>! " § % & / ( ) = ? + * # ' - _ . : , ; € @ | &lt; &gt; {'{'} {'}'}
            </TextSample>
            <TextSample fontStyles={fontStyles}>
              {longText}
            </TextSample>
          </FontStylePanel>
        </Panel>
        <Panel>
          <FontStylePanel name={`${name} / inline styles`}>
            <TextSample fontStyles={fontStyles}>
              {longTextInlineStyle}
            </TextSample>
          </FontStylePanel>
        </Panel>
      </Row>
    </Grid>
  )
}

export default withSGTheme(TextFontPanel)
