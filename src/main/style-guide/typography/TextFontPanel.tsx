import {IStyle} from 'fela'
import {Grid, Panel, Row} from 'indoqa-react-fela'
import * as React from 'react'
import {withSGTheme, WithSGTheme} from '../sgtheme/withSGTheme'
import FontStylePanel from './FontStylePanel'
import TextSample from './TextSample'
import {longText, shortText} from './TextSpecimen'

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
              {shortText}
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
              The quick brown fox jumps over the lazy dog.
            </TextSample>
            <TextSample fontStyles={fontStyles}>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
              abcdefghijklmnopqrstuvwxyz<br/>
              0123456789<br/>! " § % & / ( ) = ? + * # ' - _ . : , ; € @ | &lt; &gt; {'{'} {'}'}
            </TextSample>
            <TextSample fontStyles={fontStyles}>
              Apparently we <b>had reached</b> a great <em>height</em> in the atmosphere, for the sky was&nbsp;
              a dead black, and the <mark>stars</mark> had ceased to twinkle. By the same illusion which&nbsp;
              lifts the horizon of the sea to the level of the spectator on a hillside, the&nbsp;
              sable cloud beneath was dished out, and the car seemed to float in the middle&nbsp;
              of an immense dark sphere, whose upper half was strewn with silver.&nbsp;
              Looking down into the dark gulf below, I could see a ruddy light streaming&nbsp;
              through a rift in the clouds.&nbsp;
            </TextSample>
          </FontStylePanel>
        </Panel>
      </Row>
    </Grid>
  )
}

export default withSGTheme(TextFontPanel)
