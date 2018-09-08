import * as React from 'react'
import {Provider as Redux} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {History} from 'history'
import {Store} from "redux"

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
