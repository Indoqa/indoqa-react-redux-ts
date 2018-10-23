import {Box} from 'indoqa-react-fela'
import * as React from 'react'
import {createComponent} from 'react-fela'
import {InjectedTranslateProps, withNamespaces} from 'react-i18next'
import {Link} from 'react-router-dom'
import * as Types from 'Types'

import ButtonLink from '../../commons/components/atoms/ButtonLink'
import {User} from '../store/forms.types'

const TableData = createComponent(({theme}) => ({
  padding: theme.spacing.space1,
}), 'td') as any

const renderUserRow = (user: User, baseurl: string, t: Types.translate) => {
  return (
    <tr key={user.id}>
      <TableData>{user.name}</TableData>
      <TableData>{user.email}</TableData>
      <TableData>
        <ButtonLink>
          <Link to={`${baseurl}${user.id}`}>{t('edit')}</Link>
        </ButtonLink>
      </TableData>
    </tr>
  )
}

export interface Props extends InjectedTranslateProps {
  users: {[key: string]: User},
  baseurl: string,
}

class UsersTable extends React.Component<Props> {

  public render() {
    const {users, baseurl, t} = this.props
    return (
      <Box>
        <table>
          <tbody>
            {Object.keys(users).map((key) => renderUserRow(users[key], baseurl, t))}
          </tbody>
        </table>
      </Box>
    )
  }
}

export default withNamespaces('forms')(UsersTable)
