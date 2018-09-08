import * as React from 'react'

export type Props = {
  today: number,
  onToggle: any,
}

export default class TimeComponent extends React.Component<Props> {

  render() {
    return (
      <div>TimeComponent: {this.props.today} <button onClick={() => this.props.onToggle()}>Toggle</button></div>
    )
  }
}
