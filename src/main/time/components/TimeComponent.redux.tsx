import * as React from 'react'
import {connect} from 'react-redux'
import Types from 'Types'

import TimeComponent from './TimeComponent'
import {increment} from '../store/time.actions'

const mapStateToProps = (state: Types.RootState) => ({
  today: state.time.today,
})

export {React}
export default connect(mapStateToProps, {onIncrement: increment})(TimeComponent)
