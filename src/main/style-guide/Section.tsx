import * as React from 'react'
import {CSSProperties} from 'react'
import {FelaComponent} from 'react-fela'
import * as Types from 'Types'

interface SectionProps extends CSSProperties {
  ':not(:first-child)': CSSProperties,
}

const Section = ({children}: Types.WithChildren) => (
  <FelaComponent rule={(): SectionProps => ({
    fontSize: '1.5rem',
    fontWeight: 700,
    fontFamily: 'sans-serif',
    marginBottom: '0.75rem',
    borderBottom: '2px solid #121212',
    ':not(:first-child)': {
      marginTop: '1rem',
    },
  })}
  render="h1"
  >
    {children}
  </FelaComponent>
)

export default Section
