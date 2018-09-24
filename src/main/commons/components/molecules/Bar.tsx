import {createComponent} from 'react-fela'
import {WithTheme} from '../../../app/theme'
import Flex from '../../../idqFela/components/Flex'

const Bar = ({theme}: WithTheme) => ({
  height: theme.layout.actionBarHeight,
  backgroundColor: theme.colors.bgLight,
  width: 'auto',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

export default createComponent(Bar, Flex)
