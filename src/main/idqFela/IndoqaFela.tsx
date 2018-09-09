import React from 'react'
import {Provider as FelaProvider} from 'react-fela'

import createRenderer from './createRenderer'

export type Props = {
  fela: any,
  children: React.ReactNode,
}

export default class IndoqaFela extends React.Component<Props> {

  public render() {
    return (
      <FelaProvider renderer={createRenderer(this.props.fela)}>
        {this.props.children}
      </FelaProvider>
    )
  }
}
