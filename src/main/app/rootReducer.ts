import {combineReducers} from 'redux'
import {routerReducer, RouterState} from 'react-router-redux'

import timeReducer, {TimeState} from '../time/store/time.reducer'

export type RootState = {
  router: RouterState,
  time: TimeState,
}

const rootReducer: any = combineReducers({
  router: routerReducer,
  time: timeReducer,
})

export default rootReducer
