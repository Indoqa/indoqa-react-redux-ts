import {Grid, Panel, Row} from 'indoqa-react-fela'
import * as React from 'react'
import {withSGTheme, WithSGTheme} from '../sgtheme/withSGTheme'
import {FontMix, FontSizes} from '../types'
import FontMixContent from './FontMixContent'
import FontStylePanel from './FontStylePanel'

interface Props extends WithSGTheme {
  fontSizes: FontSizes,
  fontMix: FontMix,
}

const FontMixPanel: React.FC<Props> = ({fontSizes, fontMix}) => {
  const {name, textFont, headlineFont} = fontMix
  return (
    <Grid spacing="1rem" fullWidth>
      <Row>
        <Panel>
          <FontStylePanel name={name}>
            <FontMixContent textFont={textFont} headlineFont={headlineFont} fontSizes={fontSizes} />
          </FontStylePanel>
        </Panel>
      </Row>
    </Grid>
  )
}

export default withSGTheme(FontMixPanel)
