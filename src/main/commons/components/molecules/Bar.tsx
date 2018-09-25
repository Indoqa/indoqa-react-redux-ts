import {CSSProperties} from 'react'
import {createComponent} from 'react-fela'
import Types from 'Types'

import Flex from '../../../idqFela/components/Flex'

const Bar = ({theme}: Types.WithTheme): CSSProperties => ({
  height: theme.layout.actionBarHeight,
  backgroundColor: theme.colors.bgLight,
  width: 'auto',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

export default createComponent(Bar, Flex) as any
