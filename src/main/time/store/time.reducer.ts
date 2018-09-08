import { ActionType, getType } from 'typesafe-actions'

import * as time from './time.actions'
import {TOGGLE} from "./time.constants"

export type TimeAction = ActionType<typeof time>

export type TimeState = {
  readonly today: string,
}

const initialTime = {
  today: 'n/a'
}

const timeReducer = (state: TimeState = initialTime, action: TimeAction) => {
  switch (action.type) {
    case TOGGLE:
      console.log('reducer: toggle3')
      return {today: 'updated2'}
    default:
      return state
  }
}

export default timeReducer
