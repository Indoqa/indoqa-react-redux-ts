import {ActionType} from 'typesafe-actions'

import * as time from './time.actions'
import {INCREMENT} from './time.constants'

export type TimeAction = ActionType<typeof time>

export type TimeState = {
  readonly today: number,
}

const initialTime = {
  today: 0,
}

const timeReducer = (timeState: TimeState = initialTime, action: TimeAction) => {
  switch (action.type) {
    case INCREMENT:
      const value = action.payload === undefined ? 2 : action.payload
      return {today: timeState.today + value}
    default:
      return timeState
  }
}

export default timeReducer
