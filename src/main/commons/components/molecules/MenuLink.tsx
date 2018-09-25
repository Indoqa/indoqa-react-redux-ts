import {CSSProperties} from 'react'
import {createComponentWithProxy} from 'react-fela'
import Types from 'Types'

interface Props extends CSSProperties {
  '> .active': CSSProperties,
}

const MenuLink = ({theme}: Types.WithTheme): Props => ({
  textTransform: 'uppercase',
  cursor: 'pointer',
  borderBottom: '1px solid #f5f5f5',
  padding: theme.spacing.space1,
  margin: theme.spacing.space1,
  '> .active': {
    color: theme.colors.text,
    fontWeight: 'bold',
    cursor: 'auto',
    textDecoration: 'none',
  },
})

export default createComponentWithProxy(MenuLink, 'div') as any
