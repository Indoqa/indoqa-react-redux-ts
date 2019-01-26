import {IStyle} from 'fela'
import {Grid, Panel, Row} from 'indoqa-react-fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {SGTheme} from '../sgtheme/SGTheme'
import {withSGTheme, WithSGTheme} from '../sgtheme/withSGTheme'
import {FontSizes} from '../types'
import FontStylePanel from './FontStylePanel'

interface HeadlineProps extends  WithSGTheme {
  fontStyles: IStyle,
}

interface WithFontSize {
  fontSize: string | number | undefined
}

interface Props extends HeadlineProps {
  name: string,
  fontSizes: FontSizes,
}

const HeadlineSample: React.FC<HeadlineProps & WithFontSize> = ({fontStyles, fontSize, sgTheme, children}) => {
  const style: IStyle = {
      marginBottom: sgTheme.spacing.space2,
      fontSize,
  }
  return (
    <FelaComponent style={[fontStyles, style]} as="p">
      {children}
    </FelaComponent>
  )
}

const renderHeadlineSamples = (fontStyles: IStyle, fontSizes: FontSizes, sgTheme: SGTheme) => {
  return fontSizes.map((fontSize) => {
    return (
      <HeadlineSample fontStyles={fontStyles} fontSize={fontSize} sgTheme={sgTheme} key={fontSize}>
        The quick brown fox jumps over the lazy dog.
      </HeadlineSample>
    )
  })
}

const HeadlineFontPanel: React.FC<Props> = ({fontStyles, fontSizes, name, sgTheme}) => {
  return (
    <Grid fullWidth>
      <Row>
        <Panel>
          <FontStylePanel name={`${name} / plain`}>
            {renderHeadlineSamples(fontStyles, fontSizes, sgTheme)}
          </FontStylePanel>
        </Panel>
      </Row>
    </Grid>
  )
}

export default withSGTheme(HeadlineFontPanel)
