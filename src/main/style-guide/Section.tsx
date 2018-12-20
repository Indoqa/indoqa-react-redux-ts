import * as React from 'react'
import {CSSProperties} from 'react'
import {FelaComponent} from 'react-fela'
import * as Types from 'Types'

const Section = ({children}: Types.WithChildren) => (
  <FelaComponent rule={(): CSSProperties => ({
    fontSize: '1.5rem',
    fontWeight: 700,
    fontFamily: 'sans-serif',
    marginTop: '2rem',
    marginBottom: '1rem',
    borderBottom: '2px solid #121212',
  })}
  render="h1"
  >
    {children}
  </FelaComponent>
)

export default Section
