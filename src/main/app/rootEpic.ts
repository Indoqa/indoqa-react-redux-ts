import {combineEpics} from 'redux-observable'
import time from '../time/store/time.epics'

const rootEpic: any = combineEpics(time)
export default rootEpic
