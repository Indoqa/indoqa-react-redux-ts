import {Box} from 'indoqa-react-fela'
import * as React from 'react'
import {Link, RouteComponentProps} from 'react-router-dom'

import {User} from '../store/forms.types'
import UsersTable from './UsersTable'

export interface Props extends RouteComponentProps {
  users: { [key: string]: User },
}

export default class UsersPage extends React.Component<Props> {

  public render() {
    const {users, match} = this.props
    return (
      <Box>
        <UsersTable users={users} baseurl={match.url}/>
        <Box p={1}>
          <Link to={`${match.url}add`}>Add user</Link>
        </Box>
      </Box>
    )
  }
}
