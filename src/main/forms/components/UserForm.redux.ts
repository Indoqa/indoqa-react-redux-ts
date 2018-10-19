import {connect} from 'react-redux'
import {loadUser, saveUser} from '../store/forms.actions'
import {createNewUser} from '../store/forms.factory'
import {selectCurrentUser} from '../store/forms.selectors'

import {FormsState} from '../store/forms.types'
import UserForm from './UserForm'

const mapDispatchToProps = {loadUser, saveUser}

const mapStateToProps = (state: FormsState) => ({
  user: selectCurrentUser(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)

const mapStateToPropsAddUser = () => ({
  user: createNewUser(),
})

export const AddUserForm = connect(mapStateToPropsAddUser, mapDispatchToProps)(UserForm)
