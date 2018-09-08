import * as React from 'react'
import {Switch, Route} from 'react-router-dom'

import OverviewPage from "../overview/components/OverviewPage"
import TimePage from "../time/components/TimePage"

export default class App extends React.Component<{}> {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={OverviewPage} />
          <Route exact path="/time" component={TimePage} />
        </Switch>
      </div>
    )
  }
}
