import * as React from 'react'
import {CSSProperties} from 'react'
import {FelaComponent} from 'react-fela'

const SubSection: React.FunctionComponent = ({children}) => (
  <FelaComponent style={(): CSSProperties => ({
      fontSize: '1.2rem',
      fontWeight: 700,
      fontFamily: 'sans-serif',
      marginTop: '1rem',
      marginBottom: '0.5rem',
      borderBottom: '1px dotted #121212',
    })}
    as="h1"
  >
    {children}
  </FelaComponent>
)

export default SubSection
