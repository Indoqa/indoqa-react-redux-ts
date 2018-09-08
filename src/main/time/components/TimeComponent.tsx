import * as React from 'react'
import FelaButton from "./FelaButton"

export type Props = {
  today: number,
  onToggle: any,
}

export default class TimeComponent extends React.Component<Props> {

  render() {
    return (
      <div>TimeComponent: {this.props.today} <FelaButton onClick={() => this.props.onToggle()}>Toggle</FelaButton></div>
    )
  }
}
