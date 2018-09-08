import React from 'react'
import {Provider as FelaProvider} from 'react-fela'

import {createRenderer} from './createRenderer'
import {createMountNode} from './createMountNode'

export type Props = {
  fela: any,
  children: React.ReactNode,
}

export default class IndoqaFela extends React.Component<Props> {

  render() {
    return (
      <FelaProvider renderer={createRenderer(this.props.fela)} mountNode={createMountNode()}>
        {this.props.children}
      </FelaProvider>
    )
  }
}
