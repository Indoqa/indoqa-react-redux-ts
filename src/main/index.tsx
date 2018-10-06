import {createRenderer} from 'indoqa-react-fela'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'

import IndoqaApplication from './idqApp/IndoqaApplication'
import App from './app/App'
import createStore from './app/createStore'
import fela from './app/fela'

// Learn about React with Typescript
// see https://github.com/sw-yx/react-typescript-cheatsheet
// see https://github.com/piotrwitek/react-redux-typescript-guide
// see https://github.com/piotrwitek/typesafe-actions
// see https://github.com/mitsuruog/react-redux-observable-typescript-sample
// see https://github.com/innFactory/create-react-app-material-typescript-redux
// see https://spin.atomicobject.com/2017/07/24/redux-action-pattern-typescript/

// TODO
// - introduce react-router (switch)
// - check react component reload
// - check indoqa-webpack artifact if it is runnable with indoqa-boot
// - revisit middleware setup

// - general types export
// - review Action typing
// - review React re-exports
// -- see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25321
// -- see https://github.com/Microsoft/TypeScript/issues/24666
// -- see https://stackoverflow.com/questions/43900035/
//        ts4023-exported-variable-x-has-or-is-using-name-y-from-external-module-but
// ME: types in mapDispatchToProps
// ME: what variant of action typing do we want to support?
//     see https://github.com/piotrwitek/typesafe-actions#behold-the-mighty-tutorial


// * introduce reselect

// - upgrade rxjs and redux-observable
// - upgrade react
// * introduce epic services

// - introduce fela
// -- https://github.com/cdmbase/fullstack-pro/search?q=fela&unscoped_q=fela
// -- https://github.com/Yelmuf/Typescript-React-Redux-Fela-Happypack-Webpack4/
//    blob/f86656c60e8529159c49c3e8049cadb37e4cbf8a/src/Main.tsx
// -- introduce Theming

// * introduce immer
// ** https://www.netlify.com/blog/2018/09/12/the-rise-of-immer-in-react/

// - CSS extraction
// -- https://github.com/marharyta/webpack-boilerplate/
//      blob/master/webpack-basic-setup/webpack.config.js

// - Tooling
// -- linting
// -- IntelliJ typescript formatting and linting

// Finish phase 1
// - TS lib sample with rollup
// * indoqa-react-app / indoqa-react-fela
// * time sample (with immer)
// - MainMenuTemplate
// - Overview page
// - introduce i18n
// - typed theme
// * redux files typing
// * code splitting for routes

// Phase 2
// * forms sample
// * all other samples
// * Jest tests

const history = createHistory()
const store = createStore(history)
const rootEl =  document.getElementById('app')
const renderer = createRenderer(fela)

ReactDOM.render(
  <IndoqaApplication history={history} store={store} renderer={renderer}>
    <App />
  </IndoqaApplication>,
  rootEl,
)

if (module.hot) {
  module.hot.accept('./app/App', () => {
    const NextApp = require('./app/App.tsx').default
    ReactDOM.render(
      <IndoqaApplication history={history} store={store} renderer={renderer}>
        <NextApp />
      </IndoqaApplication>,
      rootEl,
    )
  })
}

