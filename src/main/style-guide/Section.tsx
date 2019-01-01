import * as React from 'react'
import {CSSProperties} from 'react'
import {FelaComponent} from 'react-fela'

interface SectionProps extends CSSProperties {
  ':not(:first-child)': CSSProperties,
}

const Section: React.FunctionComponent = ({children}) => (
  <FelaComponent style={(): SectionProps => ({
    fontSize: '1.5rem',
    fontWeight: 700,
    fontFamily: 'sans-serif',
    marginBottom: '0.75rem',
    borderBottom: '2px solid #121212',
    ':not(:first-child)': {
      marginTop: '1rem',
    },
  })}
  as="h1"
  >
    {children}
  </FelaComponent>
)

export default Section
