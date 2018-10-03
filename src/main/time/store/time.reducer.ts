import {TimeAction, TimeActionKeys, TimeState} from './time.types'

const initialTime: TimeState = {
  results: [],
  error: null,
  isLoading: false,
}

const timeReducer = (state: TimeState = initialTime, action: TimeAction): TimeState => {
  switch (action.type) {
    case TimeActionKeys.FETCH_TIME:
      return {
        ...state,
        isLoading: true,
      }
    case TimeActionKeys.FETCH_TIME_SUCCESS: {
      return {
        isLoading: false,
        results: action.results,
        error: null,
      }
    }
    case TimeActionKeys.FETCH_TIME_ERROR: {
      return {
        isLoading: false,
        results: [],
        error: action.error,
      }
    }
    case TimeActionKeys.CLEAR: {
      return initialTime
    }
    default:
      return state
  }
}

export default timeReducer
