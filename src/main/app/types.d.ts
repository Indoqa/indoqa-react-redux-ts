import * as React from 'react'
import {CSSProperties} from 'react'
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

declare module 'react-fela' {
  interface FelaComponentRenderProps<CTheme> {
    className: string,
    theme: CTheme,
  }

  type FelaRuleProps<CTheme, CProps> = { theme: CTheme } & {
    [P in keyof CProps]?: CProps[P]
  }

  interface FelaComponentProps<CTheme, CProps> {
    children?: React.ReactNode,
    customClass?: string,
    style?: React.CSSProperties,
    rule?: (ruleProps: FelaRuleProps<CTheme, CProps>) => React.CSSProperties,
    render?: ((renderProps: FelaComponentRenderProps<CTheme>) => React.ReactNode) | keyof React.ReactHTML,
  }

  export class FelaComponent<CProps, CTheme> extends React.Component<FelaComponentProps<CTheme, CProps> & CProps> {
  }
}
