import {of} from 'rxjs/internal/observable/of'
import {switchMap, map, catchError, retry} from 'rxjs/operators'
import {Epic, ofType} from 'redux-observable'

import Types from 'Types'
import {FetchTime, fetchTimeError, fetchTimeSuccess} from './time.actions'
import {geonamesService$} from './time.service'
import {TimeAction, TimeActionKeys} from './time.types'

interface TimeEpic extends Epic<Types.RootAction, TimeAction, Types.RootState, Types.Services> {}

/*
 * Learn more about piping observables:
 * https://blog.hackages.io/rxjs-5-5-piping-all-the-things-9d469d1b3f44
 */
const fetchTimeEpic$: TimeEpic = (action$, state, {ajax}) =>
  action$.pipe(
    ofType<FetchTime>(TimeActionKeys.FETCH_TIME),
    switchMap((action) => {
      const {lon, lat} = action.coordinates
      return geonamesService$(ajax, lon, lat).pipe(
          retry(3),
          map((result) => fetchTimeSuccess([result])),
          catchError((error) => of(fetchTimeError(error.message))),
      )
    }),
  )

export default [fetchTimeEpic$]
