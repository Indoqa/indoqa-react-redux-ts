import * as React from 'react'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate'
import UserForm from './UserForm.redux'
import UsersTable from './UsersTable.redux'
import {Route, Switch} from 'react-router'

export default class FormsPage extends React.Component<{}> {

  public render() {
    return (
      <MainMenuTemplate title="Forms">
        <Switch>
          <Route exact path="/forms/users/" component={UsersTable} />
          <Route exact path="/forms/users/:id" component={UserForm} />
        </Switch>
      </MainMenuTemplate>
    )
  }
}
