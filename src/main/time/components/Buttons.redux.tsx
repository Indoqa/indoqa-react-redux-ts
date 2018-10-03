import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {clear, fetchTime} from '../store/time.actions'
import Buttons from './Buttons'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadVienna: () => {
    dispatch(fetchTime({lon: 10, lat: 47}))
  },
  loadNewYork: () => {
    dispatch(fetchTime({lon: -74.0059700, lat: 40.7142700}))
  },
  clear: () => {
    dispatch(clear())
  },
})

export default connect(null, mapDispatchToProps)(Buttons)
