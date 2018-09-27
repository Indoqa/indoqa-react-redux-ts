import {ActionType} from 'typesafe-actions'

import * as timeActions from './time.actions'

export type TimeAction = ActionType<typeof timeActions>

export type Result = {
  time: string,
  countryName: string,
  timezoneId: string,
}

export type TimeState = {
  readonly today: number,
  readonly results: Result[],
  readonly error: any,
  readonly isLoading: boolean,
}
