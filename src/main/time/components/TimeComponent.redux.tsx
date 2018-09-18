import * as React from 'react'
import {connect} from 'react-redux'
import Types from 'Types'

import TimeComponent from './TimeComponent'
import {toggle} from '../store/time.actions'

const mapStateToProps = (state: Types.RootState) => ({
  today: state.time.today,
})

export {React}
export default connect(mapStateToProps, {onToggle: toggle})(TimeComponent)
