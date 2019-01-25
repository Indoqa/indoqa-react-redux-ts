import {IStyle} from 'fela'
import {Box, Flex} from 'indoqa-react-fela'
import * as React from 'react'
import ColorsPanel from '../colors/ColorsPanel'
import Heading from '../Heading'
import {WithSGTheme, withSGTheme} from '../sgtheme/withSGTheme'
import {Color, FontMix, FontSizes} from '../types'
import FontMixContent from '../typography/FontMixContent'

interface Props extends WithSGTheme {
  colors: Color[],
  fontMixes: FontMix[],
  fontSizes: FontSizes,
}

const OverviewPanel: React.FC<Props> = ({fontMixes, fontSizes, colors, sgTheme}) => {
  const panelStyle: IStyle = {
    marginTop: sgTheme.spacing.space4,
  }
  const textFont = fontMixes[0].textFont
  const headlineFont = fontMixes[0].headlineFont
  return (
    <Flex fullWidth direction="column">
      <Box>
        <Box>
          <Heading as="h2">Colors</Heading>
          <ColorsPanel colors={colors} small />
        </Box>
        <Box style={panelStyle}>
          <Heading as="h2">Typography</Heading>
          <FontMixContent textFont={textFont} headlineFont={headlineFont} fontSizes={fontSizes} />
        </Box>
      </Box>
    </Flex>
  )
}

export default withSGTheme(OverviewPanel)
