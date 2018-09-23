import {createComponentWithProxy} from 'react-fela'
import {BoxStyleProps, boxStyles} from './base'

const centerProp = (center: string | undefined, stretch: boolean | undefined, value: string | undefined) => {
  if (center) {
    return 'center'
  }

  if (value) {
    return value
  }

  return (stretch) ? 'stretch' : 'flex-start'
}

export declare interface FlexProps extends BoxStyleProps {
  inline?: boolean,
  direction?: string,
  nowrap?: boolean,
  center?: string,
  justifyContent?: string,
  alignItems?: string,
  stretch?: boolean,
}

const Flex = (props: FlexProps): any => {
  const {inline, direction, nowrap, center, justifyContent, alignItems, stretch} = props
  return ({
    ...boxStyles(props),
    display: (inline) ? 'inline-flex' : 'flex',
    flexDirection: direction || 'row',
    flexWrap: (nowrap) ? 'nowrap' : 'wrap',
    justifyContent: centerProp(center, stretch, justifyContent),
    alignItems: centerProp(center, stretch, alignItems),
  })
}

export default createComponentWithProxy(Flex, 'div')
