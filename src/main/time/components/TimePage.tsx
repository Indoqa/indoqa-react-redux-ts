import * as React from 'react'
import TimeComponent from './TimeComponent.redux'
import {Link} from 'react-router-dom'

export default class TimePage extends React.Component<{}> {

  public render() {
    return (
      <div>
        <h1>TimePage</h1>
        <TimeComponent />
        <hr />
        <Link to="/">OverviewPage</Link>
      </div>
    )
  }
}
