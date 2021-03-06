import {Box} from 'indoqa-react-fela'
import * as React from 'react'
import {WithNamespaces, withNamespaces} from 'react-i18next'
import {Link, RouteComponentProps} from 'react-router-dom'

import {User} from '../store/forms.types'
import UsersTable from './UsersTable'

export interface Props extends RouteComponentProps {
  users: { [key: string]: User },
}

class UsersPage extends React.Component<Props & WithNamespaces> {

  public render() {
    const {users, match, t} = this.props
    return (
      <Box>
        <UsersTable users={users} baseurl={match.url}/>
        <Box p={1}>
          <Link to={`${match.url}add`}>{t('addUser')}</Link>
        </Box>
      </Box>
    )
  }
}

export default withNamespaces('forms')(UsersPage)
