import * as React from 'react'
import {Switch, Route} from 'react-router-dom'
import {ThemeProvider} from 'react-fela'

import buildTheme from '../idqFela/buildTheme'
import OverviewPage from '../overview/components/OverviewPage'
import TimePage from '../time/components/TimePage'
import theme from './theme'

export default class App extends React.Component<{}> {

  public render() {
    return (
      <ThemeProvider theme={buildTheme(theme)}>
        <Switch>
          <Route exact path="/" component={OverviewPage}/>
          <Route exact path="/time" component={TimePage}/>
        </Switch>
      </ThemeProvider>
    )
  }
}
