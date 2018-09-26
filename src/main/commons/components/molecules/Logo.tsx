import {CSSProperties} from 'react'
import {createComponentWithProxy, FelaHtmlComponent} from 'react-fela'
import Types from 'Types'
import {BoxStyleProps} from '../../../idqFela/components/base'

import Box from '../../../idqFela/components/Box'

interface Props extends CSSProperties {
  '> a': CSSProperties,
}

export declare interface MyProps {
  'data-logo-height': number,
}

const Logo = ({theme, 'data-logo-height': logoHeight}: Types.WithTheme & MyProps): Props => {
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

export default createComponentWithProxy(Logo, Box) as FelaHtmlComponent<BoxStyleProps & MyProps, HTMLElement>
