import * as React from 'react'
import {Switch, Route} from 'react-router-dom'

import IndoqaFela from '../idq/IndoqaFela'
import OverviewPage from "../overview/components/OverviewPage"
import TimePage from "../time/components/TimePage"

export type Props = {
  fela: any,
}

export default class App extends React.Component<Props> {

  render() {
    return (
      <IndoqaFela fela={this.props.fela}>
        <div>
          <Switch>
            <Route exact path="/" component={OverviewPage}/>
            <Route exact path="/time" component={TimePage}/>
          </Switch>
        </div>
      </IndoqaFela>
    )
  }
}
