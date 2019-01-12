import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {Link} from 'react-router-dom'
import {WithSGTheme, withSGTheme} from '../sgtheme/withSGTheme'

interface MenuLinkProps extends WithSGTheme {
  to: string,
}

interface MenuLinkStyle extends IStyle {
  '> a': IStyle,
}

const Logo: React.FC<MenuLinkProps> = ({sgTheme, to, children}) => {
  const style: MenuLinkStyle = {
    paddingBottom: '0.15rem',
    listStyle: 'none',
    '> a': {
      fontSize: '1.2rem',
      fontWeight: 700,
      fontFamily: 'Roboto',
      color: '#868e96',
      textTransform: 'uppercase',
      textDecoration: 'none',
    },
  }
  return (
    <FelaComponent style={style} as="h1">
      <Link to={to}>{children}</Link>
    </FelaComponent>
  )
}

export default withSGTheme(Logo)
