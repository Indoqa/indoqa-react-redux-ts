import * as React from 'react'
import {Switch, Route} from 'react-router-dom'
import {ThemeProvider} from 'react-fela'
import {I18nextProvider} from 'react-i18next'

import buildTheme from '../idqFela/buildTheme'
import OverviewPage from '../overview/components/OverviewPage'
import TimePage from '../time/components/TimePage'
import theme from './theme'
import i18n from './i18n'

export default class App extends React.Component<{}> {

  public render() {
    return (
      <ThemeProvider theme={buildTheme(theme)}>
        <I18nextProvider i18n={i18n}>
          <Switch>
            <Route exact path="/" component={OverviewPage}/>
            <Route exact path="/time" component={TimePage}/>
          </Switch>
        </I18nextProvider>
      </ThemeProvider>
    )
  }
}
