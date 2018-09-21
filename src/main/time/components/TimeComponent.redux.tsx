import * as React from 'react'
import {connect} from 'react-redux'
// import {Dispatch} from 'redux'
import Types from 'Types'

import TimeComponent from './TimeComponent'
import {increment} from '../store/time.actions'

const mapStateToProps = (state: Types.RootState) => ({
  today: state.time.today,
})

// interface Actions {
//   onIncrement: (value: number) => void
// }

// const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>): any => ({
//   onIncrement: (value: number) => dispatch(increment(value)),
// })

export {React}
export default connect(mapStateToProps, {onIncrement: increment})(TimeComponent)
