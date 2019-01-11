import {IStyle} from 'fela'
import * as React from 'react'

export interface ComponentDescription {
  name: string,
  description?: React.ReactNode,
  component: React.ReactNode,
}

export interface Color {
  name: string,
  hexCode?: string,
}

export interface Font {
  name: string,
  fontStyle: IStyle,
}

export interface SGTheme {
  backgroundColor: string,
  menuBackgroundColor: string,
  menuShadow: string,
  fontPanelBackgroundColor: string,
  fontPanelHeaderBackgroundColor: string,
  fontStyles: {
    base: IStyle,
  }
}

export interface WithSGTheme {
  sgTheme: SGTheme,
}
