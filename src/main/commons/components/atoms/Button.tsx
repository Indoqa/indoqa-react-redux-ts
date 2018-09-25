import {CSSProperties} from 'react'
import {createComponentWithProxy} from 'react-fela'
import Types from 'Types'

const Button = ({theme}: Types.WithTheme): CSSProperties => ({
  color: theme.colors.text,
})

export default createComponentWithProxy(Button, 'button') as any
