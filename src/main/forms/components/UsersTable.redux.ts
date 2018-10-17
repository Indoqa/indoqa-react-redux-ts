import {connect} from 'react-redux'
import {selectUsers} from '../store/forms.selectors'

import {FormsState} from '../store/forms.types'
import UsersTable from './UsersTable'

const mapStateToProps = (state: FormsState) => ({
  users: selectUsers(state),
})

export default connect(mapStateToProps)(UsersTable)
