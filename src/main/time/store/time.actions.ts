import {Action} from 'redux'

import {Result, Coordinates, TimeActionKeys} from './time.types'

export interface IncrementAction extends Action {
  type: TimeActionKeys.INCREMENT,
  value: number,
}

export const increment = (value: number): IncrementAction => ({
  type: TimeActionKeys.INCREMENT,
  value,
})

// ----------------------------------------------------------------------------

export interface FetchTime extends Action {
  type: TimeActionKeys.FETCH_TIME,
  coordinates: Coordinates,
}

export const fetchTime = (coordinates: Coordinates): FetchTime => ({
  type: TimeActionKeys.FETCH_TIME,
  coordinates,
})

// ----------------------------------------------------------------------------

export interface FetchTimeSuccess extends Action {
  type: TimeActionKeys.FETCH_TIME_SUCCESS,
  results: Result[],
}

export const fetchTimeSuccess = (results: Result[]): FetchTimeSuccess => ({
  type: TimeActionKeys.FETCH_TIME_SUCCESS,
  results,
})

// ----------------------------------------------------------------------------

export interface FetchTimeError extends Action {
  type: TimeActionKeys.FETCH_TIME_ERROR,
  error: string,
}

export const fetchTimeError = (error: string): FetchTimeError => ({
  type: TimeActionKeys.FETCH_TIME_ERROR,
  error,
})
