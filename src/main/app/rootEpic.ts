import {combineEpics, ofType} from 'redux-observable'
import {takeUntil} from 'rxjs/operators'
import time from '../time/store/time.epics'

const rootEpic = (action$: any, state$: any, services: any) => {
  return combineEpics(time)(action$, state$, services).pipe(
    takeUntil(action$.pipe(
      ofType('END'),
    )),
  )
}

export default rootEpic
