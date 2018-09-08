import * as React from 'react'

export type Props = {
  today: string,
  onToggle: () => any,
}

export default class TimeComponent extends React.Component<Props> {
  render() {
    return (
      <div>TimeComponentt: {this.props.today} <button onClick={() => this.props.onToggle()}>Toggle</button></div>
    )
  }
}
