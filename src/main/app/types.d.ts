import {IStyle} from 'fela'
import * as React from 'react'
import {CSSProperties} from 'react'
import {StyleProps} from "react-fela"
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

  interface RenderProps<T> {
    className: string,
    theme: T,
    as: keyof React.ReactHTML,
  }

  // pass the union of the theme props and the FelaComponent props
  export type StyleProps<T, P = {}> = { theme: T } & {
    [K in keyof P]?: P[K]
  }

  export type StyleFunction<T, P = {}> = (styleProps: StyleProps<T, P>) => IStyle

  interface FelaComponentProps<T, P = {}> {
    // also allow passing a ReactNode as children
    children?: ((renderProps: RenderProps<T>) => React.ReactNode) | React.ReactNode,
    customClass?: string,
    style: IStyle | StyleFunction<T, P> | Array<StyleFunction<T, P> | IStyle>
    as?: keyof React.ReactHTML,
  }

  export class FelaComponent<T, P = {}> extends React.Component<FelaComponentProps<T, P> & P> {
  }
}
