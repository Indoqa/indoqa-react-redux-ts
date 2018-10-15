import {WordsState} from './words.types'

const initialState: WordsState = {
  results: [],
  prefix: '',
  isLoading: false,
  error: '',
}

export default (state: WordsState = initialState) => {
      return state
}
