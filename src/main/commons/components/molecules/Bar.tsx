import {createComponent} from 'react-fela'
import Flex from '../../../idqFela/components/Flex'

const Bar = ({theme}: any): any => ({
  height: theme.layout.actionBarHeight,
  backgroundColor: theme.colors.bgLight,
  width: 'auto',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

export default createComponent(Bar, Flex)
