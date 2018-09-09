import {createStore, Store, applyMiddleware, compose} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import {History} from 'history'

export declare interface IndoqaStoreParams {
  rootReducer: any,
  rootEpic: any,
  initialState?: any,
  enableLogging: boolean,
  history: History,
}

export declare interface IndoqaStore {
  reduxStore: Store<any>,
  epicMiddleware: any,
}

const createIndoqaStore = ({rootReducer, rootEpic, initialState = {}, enableLogging, history}: IndoqaStoreParams):
IndoqaStore => {
  const epicMiddleware: any = createEpicMiddleware()
  const middleware = [epicMiddleware]

  const indoqaStore = {
    reduxStore: createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(...middleware),
      ),
    ),
    epicMiddleware,
  }

  epicMiddleware.run(rootEpic)

  return indoqaStore
}

export default createIndoqaStore
