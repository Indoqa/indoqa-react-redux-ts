import {createAction} from 'typesafe-actions'

import {Result} from './time.types'

export interface Coordinates {
  lon: number,
  lat: number,
}

export const increment = createAction('time/INCREMENT', (resolve) => {
  return (value: number) => resolve(value)
})

export const fetchTime = createAction('time/FETCH_TIME', (resolve) => {
  return (coordinates: Coordinates) => resolve(coordinates)
})

export const fetchTimeSuccess = createAction('time/FETCH_TIME_SUCCESS', (resolve) => {
  return (results: Result[]) => resolve(results)
})

export const fetchTimeError = createAction('time/FETCH_TIME_ERROR', (resolve) => {
  return (error: string) => resolve(error)
})
