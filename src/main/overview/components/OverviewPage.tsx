import * as React from 'react'
import {Link} from "react-router-dom"

export default class OverviewPage extends React.Component<{}> {

  render() {
    return (
      <div>
        <h1>OverviewPage1</h1>
        <hr />
        <Link to="/time">TimePage</Link>
      </div>
    )
  }
}
