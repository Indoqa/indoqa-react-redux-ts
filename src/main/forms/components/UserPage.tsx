import * as React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {User} from '../store/forms.types'
import UserForm from './UserForm'

interface TemplateParams {
  id: string,
}

export interface UserFormProps extends RouteComponentProps<TemplateParams> {
  loadUser: (id: string) => void,
  saveUser: (user: User, setErrors: any) => void
  user: User,
}

export default class UserPage extends React.Component<UserFormProps> {

  public componentWillMount() {
    const {match, loadUser} = this.props
    loadUser(match.params.id)
  }

  public render() {
    return <UserForm {...this.props} />
  }
}
