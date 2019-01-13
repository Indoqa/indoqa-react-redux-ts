import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {withSGTheme, WithSGTheme} from './sgtheme/withSGTheme'

type HeadingType = 'h1' | 'h2' | 'h3'

interface Props extends WithSGTheme {
  as: HeadingType
}

const Heading: React.FC<Props> = ({children, sgTheme, as}) => {
  const style: IStyle = {
    textTransform: 'uppercase',
    paddingBottom: sgTheme.spacing.space1,
  }
  return (
    <FelaComponent style={[style, sgTheme.fontStyles[as]]} as={as}>
      {children}
    </FelaComponent>
  )
}

export default withSGTheme(Heading)
