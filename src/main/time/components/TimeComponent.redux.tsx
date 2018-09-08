import * as React from 'react'

import { connect } from 'react-redux'
import TimeComponent from "./TimeComponent"
import {toggle} from "../store/time.actions"

const mapStateToProps = (state: any) => {
  console.log('state', state)
  return ({
    today: state.time.today
  })
}

export default connect(mapStateToProps, {onToggle: toggle})(TimeComponent);
