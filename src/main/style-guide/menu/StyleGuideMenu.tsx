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
    fontFamily: 'Roboto',
    fontSize: '14px',
    marginBottom: '10px',
    paddingTop: sgTheme.spacing.space4,
    paddingLeft: sgTheme.spacing.space3,
    backgroundColor: sgTheme.menuBackgroundColor,
    tablet: {
      overflowY: 'auto',
      boxShadow: sgTheme.menuShadow,
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
