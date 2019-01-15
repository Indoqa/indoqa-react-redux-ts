import {IStyle} from 'fela'
import {Box} from 'indoqa-react-fela'
import * as React from 'react'
import {withSGTheme, WithSGTheme} from './sgtheme/withSGTheme'

const ContentPanel: React.FC<WithSGTheme> = ({children, sgTheme}) => {
  const style: IStyle = {
    boxSizing: 'border-box',
    padding: sgTheme.spacing.space4,
    overflow: 'auto',
  }
  return (
    <Box fullWidth fullHeight style={style}>
      {children}
    </Box>
  )
}

export default withSGTheme(ContentPanel)
