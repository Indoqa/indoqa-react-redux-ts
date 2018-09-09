import * as React from 'react'
import {Link} from 'react-router-dom'

export default class OverviewPage extends React.Component<{}> {

  public render() {
    return (
      <div>
        <h1>OverviewPage</h1>
        <hr />
        <Link to="/time">TimePage</Link>
      </div>
    )
  }
}
