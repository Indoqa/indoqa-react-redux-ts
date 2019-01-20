import {IStyle} from 'fela'
import {Flex} from 'indoqa-react-fela'
import * as React from 'react'
import {withSGTheme, WithSGTheme} from './sgtheme/withSGTheme'

const ContentHeader: React.FC<WithSGTheme> = ({children, sgTheme}) => {
  const style: IStyle = {
    boxSizing: 'border-box',
    height: sgTheme.layout.topMenuHeight,
    paddingLeft: sgTheme.spacing.space3,
    backgroundColor: sgTheme.colors.primaryLight,
  }
  return (
    <Flex fullWidth style={style} alignItems="center">
      {children}
    </Flex>
  )
}

export default withSGTheme(ContentHeader)
