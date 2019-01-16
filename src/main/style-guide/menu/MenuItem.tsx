import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {NavLink} from 'react-router-dom'
import {WithSGTheme, withSGTheme} from '../sgtheme/withSGTheme'

interface MenuLinkProps extends WithSGTheme {
  to: string,
}

interface MenuLinkStyle extends IStyle {
  '> a': IStyle,
  '> a:visited': IStyle,
  '> a.active': IStyle,
}

const MenuItem: React.FC<MenuLinkProps> = ({sgTheme, to, children}) => {
  const style: MenuLinkStyle = {
    paddingBottom: '0.15rem',
    listStyle: 'none',
    '> a': {
      textDecoration: 'none',
      ...sgTheme.fontStyles.base,
    },
    '> a:visited': {
      textDecoration: 'none',
      ...sgTheme.fontStyles.base,
    },
    '> a.active': {
      fontWeight: 'bold',
    },
  }
  return (
    <FelaComponent style={style} as="li">
      <NavLink to={to}>{children}</NavLink>
    </FelaComponent>
  )
}

export default withSGTheme(MenuItem)
