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

export type TimeState = {
  readonly today: number,
  readonly results: Result[],
  readonly error: any,
  readonly isLoading: boolean,
}

export type Coordinates = {
  readonly lon: number,
  readonly lat: number,
}

export type Result = {
  readonly time: string,
  readonly countryName: string,
  readonly timezoneId: string,
}
