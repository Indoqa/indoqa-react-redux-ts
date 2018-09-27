import {CSSProperties} from 'react'
import {createComponentWithProxy} from 'react-fela'
import Types from 'Types'
import {BoxStyleProps} from '../../../idqFela/components/base'

import Box from '../../../idqFela/components/Box'

interface LogoStyleProps extends CSSProperties {
  '> a': CSSProperties,
}

export declare interface Props extends Types.WithChildren {
  'data-logo-height': number,
}

const Logo = ({theme, 'data-logo-height': logoHeight}: Props & Types.FelaProps): LogoStyleProps => {
  return ({
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    height: logoHeight,
    fontWeight: 'bold',
    '> a': {
      textDecoration: 'none',
      color: theme.colors.text,
    },
  })
}

export default createComponentWithProxy<Props, BoxStyleProps, HTMLDivElement>(Logo, Box)
