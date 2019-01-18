import {IStyle} from 'fela'
import {Box, Flex} from 'indoqa-react-fela'
import * as React from 'react'
import ColorsPanel from '../colors/ColorsPanel'
import Heading from '../Heading'
import {WithSGTheme, withSGTheme} from '../sgtheme/withSGTheme'
import {Color} from '../types'

interface Props extends WithSGTheme {
  colors: Color[],
}

const OverviewPanel: React.FC<Props> = ({sgTheme, colors}) => {
  const panelStyle: IStyle = {
    marginTop: sgTheme.spacing.space4,
  }
  return (
    <Flex fullWidth direction="column">
      <Box>
        <Box>
          <Heading as="h2">Colors</Heading>
          <ColorsPanel colors={colors} small />
        </Box>
        <Box style={panelStyle}>
          <Heading as="h2">Typography</Heading>
        </Box>
      </Box>
    </Flex>
  )
}

export default withSGTheme(OverviewPanel)
