import {FetchTime, FetchTimeError, FetchTimeSuccess, IncrementAction} from './time.actions'

export type TimeAction =
  IncrementAction
  | FetchTime
  | FetchTimeSuccess
  | FetchTimeError

export enum TimeActionKeys {
  INCREMENT = 'time/INCREMENT',
  FETCH_TIME = 'time/FETCH_TIME',
  FETCH_TIME_SUCCESS = 'time/FETCH_TIME_SUCCESS',
  FETCH_TIME_ERROR = 'time/FETCH_TIME_ERROR',
}

export interface Coordinates {
  lon: number,
  lat: number,
}

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
