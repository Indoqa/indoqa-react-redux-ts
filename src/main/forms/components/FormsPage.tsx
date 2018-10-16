import * as React from 'react'
import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate'
import {User} from '../store/forms.types'
import UserForm from './UserForm'

export default class FormsPage extends React.Component<{}> {

  public render() {
    const user: User = {
      id: 'abc',
      name: 'Testuser',
      email: 'test@testmail.com',
      lastModified: new Date(),
      addresses: [
        {
          street: 'street1',
          city: 'city1',
          country: 'country1',
          zipCode: 'zipCode1',
        },
      ],
    }
    return (
      <MainMenuTemplate title="Forms">
        <UserForm user={user} onSubmit={(savedUser: User) => console.log('user', savedUser)} />
      </MainMenuTemplate>
    )
  }
}
