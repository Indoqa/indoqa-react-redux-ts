import * as React from 'react'
import {createComponentWithProxy} from 'react-fela'

export type Props = {
today: number,
onToggle: any,
}

const StyledButton = createComponentWithProxy(({}) => ({
  color: 'green',
  width: 210,
}), 'button')

export default class TimeComponent extends React.Component<Props> {

  render() {
    return (
      <div>TimeComponent: {this.props.today} <StyledButton onClick={() => this.props.onToggle()}>Toggle</StyledButton></div>
    )
  }
}
