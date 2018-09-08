import { combineEpics, Epic } from 'redux-observable'
import time from '../time/store/time.epics'

export default combineEpics(time)
