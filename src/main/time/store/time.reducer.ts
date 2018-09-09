import {ActionType} from 'typesafe-actions'

import * as time from './time.actions'
import {TOGGLE} from './time.constants'

export type TimeAction = ActionType<typeof time>

export type TimeState = {
  readonly today: number,
}

const initialTime = {
  today: 0,
}

const timeReducer = (timeState: TimeState = initialTime, action: TimeAction) => {
  switch (action.type) {
    case TOGGLE:
      /* tslint:disable:no-console */
      console.log('reducer: toggle')
      return {today: timeState.today + 2}
    default:
      return timeState
  }
}

export default timeReducer
