import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'

interface SectionProps extends IStyle {
  ':not(:first-child)': IStyle,
}

const Section: React.FunctionComponent = ({children}) => {
  const style: SectionProps = {
    fontSize: '1rem',
    fontWeight: 700,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    color: '#495057',
    textTransform: 'uppercase',
    marginBottom: '0.75rem',
    ':not(:first-child)': {
      marginTop: '1rem',
    },
  }
  return (
    <FelaComponent style={style} as="h1">
      {children}
    </FelaComponent>
  )
}

export default Section
