import * as React from 'react'
import {connect} from 'react-redux'

import TimeComponent from "./TimeComponent"
import {toggle} from "../store/time.actions"
import {RootState} from "../../app/rootReducer"

const mapStateToProps = (state: RootState) => ({
  today: state.time.today,
})

export {React}
export default connect(mapStateToProps, {onToggle: toggle})(TimeComponent)
