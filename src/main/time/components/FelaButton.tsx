import * as React from 'react'
import {createComponentWithProxy, FelaInjectedProps} from 'react-fela'

const FelaButton = ({}) => ({
  color: 'blue',
})

export {React}
export default createComponentWithProxy(FelaButton, 'button')

