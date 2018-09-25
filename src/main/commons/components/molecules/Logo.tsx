import {CSSProperties} from 'react'
import {createComponentWithProxy, FelaHtmlComponent} from 'react-fela'
import Types from 'Types'
import {BoxStyleProps} from '../../../idqFela/components/base'

import Box from '../../../idqFela/components/Box'

interface Props extends CSSProperties {
  '> a': CSSProperties,
}

export declare interface MyProps {
  customHeight: number,
}

const Logo = ({theme, customHeight}: Types.WithTheme & MyProps): Props => {
  return ({
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    height: customHeight,
    fontWeight: 'bold',
    '> a': {
      textDecoration: 'none',
      color: theme.colors.text,
    },
  })
}

export default createComponentWithProxy(Logo, Box) as FelaHtmlComponent<BoxStyleProps & MyProps, HTMLElement>
