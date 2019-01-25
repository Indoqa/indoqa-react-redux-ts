import {IStyle} from 'fela'
import {Grid, Panel, Row} from 'indoqa-react-fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {withSGTheme, WithSGTheme} from '../sgtheme/withSGTheme'
import {FontSizes} from '../types'
import FontStylePanel from './FontStylePanel'

interface FontStyleContainerProps {
  fontStyles: IStyle,
}

interface WithFontSize {
  fontSize: string | number | undefined
}

interface Props extends FontStyleContainerProps, WithSGTheme {
  name: string,
  fontSizes: FontSizes,
}

const HeadlineSample: React.FC<FontStyleContainerProps & WithFontSize> = ({fontStyles, fontSize, children}) => {
  const style: IStyle = {
      marginTop: '1rem',
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
      fontSize,
  }
  return (
    <FelaComponent style={[fontStyles, style]} as="p">
      {children}
    </FelaComponent>
  )
}

const renderHeadlineSamples = (fontStyles: IStyle, fontSizes: FontSizes) => {
  return fontSizes.map((fontSize) => {
    return (
      <HeadlineSample fontStyles={fontStyles} fontSize={fontSize} key={fontSize}>
        The quick brown fox jumps over the lazy dog.
      </HeadlineSample>
    )
  })
}

const HeadlineFontStylePanel: React.FC<Props> = ({fontStyles, fontSizes, name}) => {
  return (
    <Grid spacing="1rem" fullWidth>
      <Row>
        <Panel>
          <FontStylePanel name={`${name} / plain`}>
            {renderHeadlineSamples(fontStyles, fontSizes)}
          </FontStylePanel>
        </Panel>
      </Row>
    </Grid>
  )
}

export default withSGTheme(HeadlineFontStylePanel)
