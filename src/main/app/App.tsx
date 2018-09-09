import * as React from 'react'
import {Switch, Route} from 'react-router-dom'
import {ThemeProvider} from 'react-fela'

import IndoqaFela from '../idqFela/IndoqaFela'
import buildTheme from "../idqFela/buildTheme"
import OverviewPage from "../overview/components/OverviewPage"
import TimePage from "../time/components/TimePage"
import fela from "./fela"
import theme from "./theme"

export type Props = {
  fela: any,
}

export default class App extends React.Component<Props> {

  render() {
    return (
      <IndoqaFela fela={fela}>
        <ThemeProvider theme={buildTheme(theme)}>
          <div>
            <Switch>
              <Route exact path="/" component={OverviewPage}/>
              <Route exact path="/time" component={TimePage}/>
            </Switch>
          </div>
        </ThemeProvider>
      </IndoqaFela>
    )
  }
}
