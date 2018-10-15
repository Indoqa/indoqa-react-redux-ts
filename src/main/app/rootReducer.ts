import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import timeReducer from '../time/store/time.reducer'
import wordsReducer from '../words/store/words.reducer'

const rootReducer: any = combineReducers({
  router: routerReducer,
  time: timeReducer,
  words: wordsReducer,
})

export default rootReducer
