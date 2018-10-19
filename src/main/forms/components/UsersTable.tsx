import {Box} from 'indoqa-react-fela'
import * as React from 'react'
import {createComponent} from 'react-fela'
import {Link, RouteComponentProps} from 'react-router-dom'

import ButtonLink from '../../commons/components/atoms/ButtonLink'
import {User} from '../store/forms.types'

const TableData = createComponent(({theme}) => ({
  padding: theme.spacing.space1,
}), 'td') as any

const renderUserRow = (user: User) => {
  return (
    <tr key={user.id}>
      <TableData>{user.name}</TableData>
      <TableData>{user.email}</TableData>
      <TableData>
        <ButtonLink>
          <Link to={`/forms/users/${user.id}`}>Edit</Link>
        </ButtonLink>
      </TableData>
    </tr>
  )
}

export interface Props extends RouteComponentProps {
  users: {[key: string]: User},
}

export default class UsersTable extends React.Component<Props> {

  public render() {
    const {users, match} = this.props
    return (
      <Box>
        <table>
          <tbody>
          {Object.keys(users).map((key) => renderUserRow(users[key]))}
          </tbody>
        </table>
        <Box p={1}>
          <ButtonLink>
            <Link to={`${match.url}add`}>Add user</Link>
          </ButtonLink>
        </Box>
      </Box>
    )
  }
}
