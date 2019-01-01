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
  // see http://fela.js.org/docs/api/bindings/FelaComponent.html

  interface RenderProps<CTheme> {
    className: string,
    theme: CTheme,
    as: keyof React.ReactHTML,
  }

  // pass the union of the theme props and the FelaComponent props
  type FelaStyleProps<CProps, CTheme> = { theme: CTheme } & {
    [P in keyof CProps]?: CProps[P]
  }

  interface FelaComponentProps<CProps, CTheme> {
    // also allow passing a ReactNode as children
    children?: ((renderProps: RenderProps<CTheme>) => React.ReactNode) | React.ReactNode,
    customClass?: string,
    // composition not supported yet
    style: (styleProps: FelaStyleProps<CProps, CTheme>) => React.CSSProperties,
    as?: keyof React.ReactHTML,
  }

  export class FelaComponent<CProps, CTheme> extends React.Component<FelaComponentProps<CProps, CTheme> & CProps> {
  }
}
