import {IStyle} from 'fela'
import {Box} from 'indoqa-react-fela'
import * as React from 'react'
import {WithSGTheme, withSGTheme} from '../sgtheme/withSGTheme'

interface StyleGuideMenuCSSProps extends IStyle {
  tablet: IStyle,
}

const StyleGuideMenu: React.FC<WithSGTheme> = ({children, sgTheme}) => {
  const style: StyleGuideMenuCSSProps = {
    boxSizing: 'border-box',
    backgroundColor: sgTheme.colors.primary,
    tablet: {
      overflowY: 'auto',
      borderBottom: 'none',
    },
  }
  return (
    <Box fullWidth fullHeight style={style}>
      {children}
    </Box>
  )
}

export default withSGTheme(StyleGuideMenu)
