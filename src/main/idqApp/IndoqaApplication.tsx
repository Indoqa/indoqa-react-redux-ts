import * as React from 'react'
import {Store} from 'redux'
import {Provider as Redux} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {History} from 'history'
import IndoqaFela from '../idqFela/IndoqaFela'

export type Props = {
  store: Store<any>,
  history: History,
  children: React.ReactNode,
  fela: any,
}

export default class IndoqaApplication extends React.Component<Props> {

  public render() {
    return (
      <Redux store={this.props.store}>
        <IndoqaFela fela={this.props.fela}>
          <ConnectedRouter history={this.props.history}>
            {this.props.children}
          </ConnectedRouter>
        </IndoqaFela>
      </Redux>
    )
  }
}
