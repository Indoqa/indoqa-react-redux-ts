import {TimeAction, TimeActionKeys, TimeState} from './time.types'

const initialTime: TimeState = {
  today: 0,
  results: [{time: 'foo', countryName: 'bar', timezoneId: 'xx'}],
  error: null,
  isLoading: false,
}

const timeReducer = (state: TimeState = initialTime, action: TimeAction): TimeState => {
  switch (action.type) {
    case TimeActionKeys.INCREMENT:
      return {
        ...state,
        today: state.today + (action.value === undefined ? 2 : action.value),
      }
    case TimeActionKeys.FETCH_TIME_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        results: action.results,
        error: null,
      }
    }
    default:
      return state
  }
}

export default timeReducer
