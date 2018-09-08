import createIndoqaStore from '../idq/createIndoqaStore'
import {History} from 'history'
import {Store} from "redux"

declare var module: any

const createStore = (history: History):Store<any> => {
  const indoqaStore = createIndoqaStore({
    rootReducer: require('./rootReducer.ts').default,
    rootEpic: require('./rootEpic.ts').default,
    enableLogging: process.env.NODE_ENV !== 'production',
    history,
  })

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer.ts').default
      indoqaStore.reduxStore.replaceReducer(nextRootReducer)
    })

    if (indoqaStore.epicMiddleware) {
      module.hot.accept('./rootEpic', () => {
        const nextRootEpic = require('./rootEpic.ts').default
        indoqaStore.epicMiddleware.replaceEpic(nextRootEpic)
      })
    }
  }

  return indoqaStore.reduxStore
}

export default createStore
