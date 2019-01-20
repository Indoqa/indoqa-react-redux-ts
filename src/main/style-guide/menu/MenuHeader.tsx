import {IStyle} from 'fela'
import {Flex} from 'indoqa-react-fela'
import * as React from 'react'
import {withSGTheme, WithSGTheme} from '../sgtheme/withSGTheme'

const MenuHeader: React.FC<WithSGTheme> = ({children, sgTheme}) => {
  const style: IStyle = {
    boxSizing: 'border-box',
    height: sgTheme.layout.topMenuHeight,
    paddingLeft: `calc(${sgTheme.spacing.space4} + 0.5rem)`,
  }
  return (
    <Flex fullWidth style={style} alignItems="center">
      {children}
    </Flex>
  )
}

export default withSGTheme(MenuHeader)
