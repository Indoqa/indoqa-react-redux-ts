import {connect} from 'react-redux'
import {loadUser, saveUser} from '../store/forms.actions'
import {selectCurrentUser} from '../store/forms.selectors'

import {FormsState} from '../store/forms.types'
import UserForm from './UserForm'

const mapStateToProps = (state: FormsState) => ({
  user: selectCurrentUser(state),
})

export default connect(mapStateToProps, {loadUser, saveUser})(UserForm)
