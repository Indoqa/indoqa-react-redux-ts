import * as React from 'react'

export default class App extends React.Component<{
  message: string,
}> {
  render() {
    return (
      <div>{this.props.message}</div>
    );
  }
}
