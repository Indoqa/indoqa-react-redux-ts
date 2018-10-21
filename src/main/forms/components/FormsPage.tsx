import * as React from 'react'

import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate'
import UserPage, {AddUserPage} from './UserPage.redux'
import {Route, RouteComponentProps, Switch} from 'react-router'
import UsersPage from './UsersPage.redux'

export default class FormsPage extends React.Component<RouteComponentProps> {

  public render() {
    const {match} = this.props
    return (
      <MainMenuTemplate title="Forms">
        <Switch>
          <Route exact path={`${match.url}/users/`} component={UsersPage} />
          <Route exact path={`${match.url}/users/add`} component={AddUserPage} />
          <Route exact path={`${match.url}/users/:id`} component={UserPage} />
        </Switch>
      </MainMenuTemplate>
    )
  }
}
