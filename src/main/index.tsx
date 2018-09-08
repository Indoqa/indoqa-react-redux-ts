import * as React from 'react'
import * as ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'

import IndoqaApplication from './idq/IndoqaApplication'
import App from "./app/App"
import createStore from "./app/createStore"
import fela from './app/fela'

// Learn about React with Typescript
// see https://github.com/sw-yx/react-typescript-cheatsheet
// see https://github.com/piotrwitek/react-redux-typescript-guide
// see https://github.com/piotrwitek/typesafe-actions
// see https://github.com/mitsuruog/react-redux-observable-typescript-sample
// see https://github.com/innFactory/create-react-app-material-typescript-redux

// TODO
// - introduce react-router (switch)
// - check react component reload
// * check indoqa-webpack artifact if it is runnable with indoqa-boot
// * revisit middleware setup

// * review Action typing
// - review React re-exports
// -- see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25321
// -- see https://github.com/Microsoft/TypeScript/issues/24666
// -- see https://stackoverflow.com/questions/43900035/ts4023-exported-variable-x-has-or-is-using-name-y-from-external-module-but

// * introduce reselect

// * upgrade rxjs and redux-observable
// * upgrade react
// * switchMap (load time info via ajax)
// * introduce epic dependencies
// * general types export

// - introduce fela
// -- https://github.com/cdmbase/fullstack-pro/search?q=fela&unscoped_q=fela
// -- https://github.com/Yelmuf/Typescript-React-Redux-Fela-Happypack-Webpack4/blob/f86656c60e8529159c49c3e8049cadb37e4cbf8a/src/Main.tsx
// ** introduce Theming <------------------------------

// * introduce i18n
// * forms sample
// * all other samples
// * Jest tests
// * linting
// * IntelliJ typescript formatting and linting

declare var module: any

const history = createHistory()
const store = createStore(history)
const rootEl =  document.getElementById('app')

ReactDOM.render(
  <IndoqaApplication history={history} store={store}>
    <App fela={fela} />
  </IndoqaApplication>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./app/App', () => {
    const NextApp = require('./app/App.tsx').default
    const nextFela = require('./app/fela.ts').default
    ReactDOM.render(
      <IndoqaApplication history={history} store={store}>
        <NextApp fela={nextFela}/>
      </IndoqaApplication>,
      rootEl
    )
  })
}

