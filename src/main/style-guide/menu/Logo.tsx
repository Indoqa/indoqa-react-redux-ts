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
    listStyle: 'none',
    '> a': {
      ...sgTheme.fontStyles.headline,
      fontSize: sgTheme.fontSizes.veryBig,
      textTransform: 'uppercase',
      textDecoration: 'none',
      backgroundColor: sgTheme.colors.primaryDark,
      color: '#ffffff',
      lineHeight: 1,
      paddingLeft: sgTheme.spacing.space2,
      paddingRight: sgTheme.spacing.space2,
      paddingBottom: 1,
      marginLeft: `-${sgTheme.spacing.space2}`,
    },
  }
  return (
    <FelaComponent style={style} as="h1">
      <Link to={to}>{children}</Link>
    </FelaComponent>
  )
}

export default withSGTheme(Logo)
