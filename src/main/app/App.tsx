import * as React from 'react'
import TimeComponent from "../time/components/TimeComponent.redux"

export type Props = {
  message: string,
}

export default class App extends React.Component<Props> {

  render() {
    return (
      <div>
        <div>Message: {this.props.message}</div>
        <TimeComponent />
      </div>
    )
  }
}
