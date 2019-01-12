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
