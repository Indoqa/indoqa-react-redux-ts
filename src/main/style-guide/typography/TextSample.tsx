import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'

interface Props {
  fontStyles: IStyle,
}

const TextSample: React.FunctionComponent<Props> = ({fontStyles, children}) => {
  const style: IStyle = {
    paddingBottom: '0.5rem',
  }
  return (
    <FelaComponent style={[style, fontStyles]} as="p">
      {children}
    </FelaComponent>
  )
}

export default TextSample
