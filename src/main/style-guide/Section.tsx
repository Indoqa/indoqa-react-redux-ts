import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'

interface SectionProps extends IStyle {
  ':not(:first-child)': IStyle,
}

const Section: React.FunctionComponent = ({children}) => {
  const style: SectionProps = {
    fontSize: '1.5rem',
    fontWeight: 700,
    fontFamily: 'sans-serif',
    marginBottom: '0.75rem',
    borderBottom: '2px solid #121212',
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
