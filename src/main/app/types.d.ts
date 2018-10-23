import * as React from 'react'
import {CSSProperties} from 'react'
import {InjectedTranslateProps} from 'react-i18next'
import {StateType} from 'typesafe-actions'

import {services} from './rootEpic'
import rootReducer from './rootReducer'
import {Theme} from './theme'

import {WordsAction} from '../words/store/words.types'
import {TimeAction} from '../time/store/time.types'
import {FormsAction} from '../forms/store/forms.types'

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>
  export type RootAction = FormsAction
    | TimeAction
    | WordsAction
  export type Services = typeof services

  export type translate = InjectedTranslateProps['t']

  export interface CSSPropertiesWithBreakpointExtensions extends CSSProperties {
    desktop: CSSProperties,
    tablet: CSSProperties,
  }
  export interface WithTheme {
    readonly theme: Theme,
  }
  export interface WithChildren {
    readonly children?: React.ReactNode,
  }
  export interface FelaProps extends WithTheme, WithChildren {}
}
