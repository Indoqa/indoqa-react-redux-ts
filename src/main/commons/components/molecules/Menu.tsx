import {CSSProperties} from 'react'
import {createComponentWithProxy} from 'react-fela'
import Types from 'Types'

const Menu = ({theme}: Types.WithTheme): CSSProperties => ({
  width: theme.layout.menuWidth,
  height: '100%',
  backgroundColor: theme.colors.bgLight,
})

export default createComponentWithProxy(Menu) as any
