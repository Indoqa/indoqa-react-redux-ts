import {createComponent} from 'react-fela'
import {WithTheme} from '../../../app/theme'
import Box from '../../../idqFela/components/Box'

const Content = ({theme}: WithTheme) => ({
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

export default createComponent(Content, Box)
