import {CSSProperties} from 'react'
import {StateType} from 'typesafe-actions'
import {RouterAction, LocationChangeAction} from 'react-router-redux'
type ReactRouterAction = RouterAction | LocationChangeAction

import {TimeAction} from '../time/store/time.reducer'
import rootReducer from './rootReducer'
import {Theme} from './theme'

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>
  export type RootAction = ReactRouterAction | TimeAction
  export interface CSSPropertiesWithBreakpointExtensions extends CSSProperties {
    desktop: CSSProperties,
    tablet: CSSProperties,
  }
  export interface WithTheme {
    readonly theme: Theme,
  }
}
