import {createStore, Store, applyMiddleware, compose} from 'redux'
import {createEpicMiddleware, Epic} from 'redux-observable'
import {History} from 'history'

export declare interface IndoqaStoreParams {
  rootReducer: any,
  rootEpic: Epic<any, any, any, any>,
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
  const epicMiddleware = createEpicMiddleware(rootEpic)
  const middleware = [epicMiddleware]

  return {
    reduxStore: createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(...middleware),
      ),
    ),
    epicMiddleware,
  }
}

export default createIndoqaStore
