import {Box, BoxProps} from 'indoqa-react-fela'
import {createComponent} from 'react-fela'
import Types from 'Types'

const Content = ({theme}: Types.FelaProps): Types.CSSPropertiesWithBreakpointExtensions => ({
  display: 'table-cell',
  padding: theme.spacing.space2,
  width: '100%',
  desktop: {
    marginLeft: theme.layout.menuWidth,
  },
  tablet: {
    marginLeft: theme.layout.menuWidth,
  },
})

export default createComponent<Types.WithChildren, BoxProps, HTMLDivElement>(Content, Box)
