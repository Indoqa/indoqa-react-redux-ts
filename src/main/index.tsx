import * as React from 'react'
import * as ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'

import IndoqaApplication from './idq/IndoqaApplication'
import App from "./app/App"
import createStore from "./app/createStore"

// Learn about React with Typescript
// see https://github.com/mitsuruog/react-redux-observable-typescript-sample
// see https://github.com/innFactory/create-react-app-material-typescript-redux
// see https://github.com/piotrwitek/react-redux-typescript-guide

// TODO
// * introduce react-router (switch)
// * check react component reload
// * check indoqa-webpack artifact if it is runnable with indoqa-boot

// * review Action typing
// * review React re-exports
// ** see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25321
// ** see https://github.com/Microsoft/TypeScript/issues/24666
// ** see https://stackoverflow.com/questions/43900035/ts4023-exported-variable-x-has-or-is-using-name-y-from-external-module-but

// * introduce reselect

// * upgrade rxjs and redux-observable
// * upgrade react
// * switchMap (load time info via ajax)
// * introduce epic dependencies
// * general types export

// * introduce fela
// * introduce i18n
// * forms sample
// * all other samples
// * Jest tests

// * linting
// * IntelliJ typescript formatting and linting

const history = createHistory()
const store = createStore(history)
const app = (
  <IndoqaApplication history={history} store={store}>
    <App message="hello, world!"/>
  </IndoqaApplication>
)

ReactDOM.render(app, document.getElementById('app'))
