import * as React from 'react'
import {Switch, Route} from 'react-router-dom'
import {ThemeProvider} from 'react-fela'
import {I18nextProvider} from 'react-i18next'
import {Box, buildTheme} from 'indoqa-react-fela'
import Loadable from 'react-loadable'

import MainMenuTemplate from '../commons/components/templates/MainMenuTemplate'
import UploadPage from '../upload/components/UploadPage'
import WordsPage from '../words/components/WordsPage'
import i18n from './i18n'
import theme from './theme'

const Loading = () => (
  <MainMenuTemplate title="Overview">
    <Box m={2}>Loading ...</Box>
  </MainMenuTemplate>
)

const OverviewPage = Loadable({
  loader: () => import('../overview/components/OverviewPage'),
  loading: Loading,
})

const TimePage = Loadable({
  loader: () => import('../time/components/TimePage'),
  loading: Loading,
})

const FormsApp = Loadable({
  loader: () => import('../forms/components/FormsApp'),
  loading: Loading,
})

export default class App extends React.Component<{}> {

  public render() {
    return (
      <ThemeProvider theme={buildTheme(theme)}>
        <I18nextProvider i18n={i18n}>
          <Switch>
            <Route exact path="/" component={OverviewPage}/>
            <Route exact path="/time" component={TimePage}/>
            <Route exact path="/words" component={WordsPage} />
            <Route path="/forms" component={FormsApp} />
            <Route path="/upload" component={UploadPage} />
          </Switch>
        </I18nextProvider>
      </ThemeProvider>
    )
  }
}
