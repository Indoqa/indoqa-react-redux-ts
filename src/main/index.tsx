import * as React from 'react'
import * as ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'

import IndoqaApplication from './idq/IndoqaApplication'
import App from "./app/App"
import createStore from "./app/createStore"

// see https://github.com/mitsuruog/react-redux-observable-typescript-sample
// see https://github.com/innFactory/create-react-app-material-typescript-redux
// see https://github.com/piotrwitek/react-redux-typescript-guide

// see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25321

const history = createHistory()
const store = createStore(history)
const app = (
  <IndoqaApplication history={history} store={store}>
    <App message="hello, world!"/>
  </IndoqaApplication>
)

ReactDOM.render(app, document.getElementById('app'))
