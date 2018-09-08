import {combineReducers, AnyAction} from 'redux'
import {routerReducer} from 'react-router-redux'

import {timeReducer} from '../time'

const rootReducer = combineReducers({
  router: routerReducer,
  time: timeReducer,
})

export default rootReducer
