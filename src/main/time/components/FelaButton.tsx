import * as React from 'react'
import {createComponentWithProxy} from 'react-fela'

const FelaButton = ({}) => ({
  color: 'red',
  width: 400,
})

export {React}
export default createComponentWithProxy(FelaButton, 'button')


