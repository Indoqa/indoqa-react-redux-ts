import * as React from 'react'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate'
import UserForm, {AddUserForm} from './UserForm.redux'
import UsersTable from './UsersTable.redux'
import {Route, RouteComponentProps, Switch} from 'react-router'

export default class FormsPage extends React.Component<RouteComponentProps> {

  public render() {
    const {match} = this.props
    return (
      <MainMenuTemplate title="Forms">
        <Switch>
          <Route exact path={`${match.url}/users/`} component={UsersTable} />
          <Route exact path={`${match.url}/users/add`} component={AddUserForm} />
          <Route exact path={`${match.url}/users/:id`} component={UserForm} />
        </Switch>
      </MainMenuTemplate>
    )
  }
}
