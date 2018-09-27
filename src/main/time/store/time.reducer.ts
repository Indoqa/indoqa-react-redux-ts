import {getType} from 'typesafe-actions'

import * as timeActions from './time.actions'
import {TimeAction, TimeState} from './time.types'

const initialTime: TimeState = {
  today: 0,
  results: [{time: 'foo', countryName: 'bar', timezoneId: 'xx'}],
  error: null,
  isLoading: false,
}

const timeReducer = (state: TimeState = initialTime, action: TimeAction): TimeState => {
  switch (action.type) {
    case getType(timeActions.increment):
      return {
        ...state,
        today: state.today + (action.payload === undefined ? 2 : action.payload),
      }
    case getType(timeActions.fetchTimeSuccess): {
      return {
        ...state,
        isLoading: false,
        results: action.payload,
        error: null,
      }
    }
    default:
      return state
  }
}

export default timeReducer
