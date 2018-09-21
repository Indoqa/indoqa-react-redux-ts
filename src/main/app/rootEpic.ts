import {ActionsObservable, combineEpics, ofType} from 'redux-observable'
import {takeUntil} from 'rxjs/operators'
import * as Types from 'Types'
import time from '../time/store/time.epics'

const rootEpic = (action$: ActionsObservable<Types.RootAction>, state$: Types.RootState, services: any) => {
  return combineEpics(time)(action$, state$, services).pipe(
    takeUntil(action$.pipe(
      ofType('END'),
    )),
  )
}

export default rootEpic
