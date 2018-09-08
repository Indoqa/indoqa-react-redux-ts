import * as React from 'react'
import {Store} from "redux"
import {Provider as Redux} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {History} from 'history'

export type Props = {
  store: Store<any>,
  history: History,
  children: React.ReactNode,
}

export default class IndoqaApplication extends React.Component<Props> {

  render() {
    return (
      <Redux store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          {this.props.children}
        </ConnectedRouter>
      </Redux>
    )
  }
}
