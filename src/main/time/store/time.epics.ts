import {of} from 'rxjs/internal/observable/of'
import {ignoreElements, tap, switchMap, map, catchError} from 'rxjs/operators'
import {Epic, ofType} from 'redux-observable'

import Types from 'Types'
import {FetchTime, fetchTimeError, fetchTimeSuccess, IncrementAction} from './time.actions'
import {Result, TimeAction, TimeActionKeys} from './time.types'

interface TimeEpic extends Epic<Types.RootAction, TimeAction, Types.RootState, Types.Services> {}

/* tslint:disable:no-console */
const incrementEpic$: TimeEpic = (action$, state, s) =>
  action$.pipe(
    ofType<IncrementAction>(TimeActionKeys.INCREMENT),
    tap((x) => console.log('xxxxyz12', s.ajax)),
    ignoreElements(),
  )

const fetchTimeEpic$: TimeEpic = (action$, state, {ajax}) =>
  action$.pipe(
    ofType<FetchTime>(TimeActionKeys.FETCH_TIME),
    switchMap((action) => {
      return ajax.getJSON<Result[]>(`oo${action.coordinates}`).pipe(
          map((response) => fetchTimeSuccess(response)),
          catchError((error) => of(fetchTimeError(error.message))),
      )
    }),
  )

/*
const fetchTimeEpic$ = (action$, store, {ajax}) =>
  action$
    .ofType('FETCH_TIME')
    .switchMap((action) => {
      return ajax
        .getJSON(url(action.lon, action.lat))

        // the timezone API often returns error (probably some access rate limitation),
        // 'retry' mitigates the problem

        // .retry(3)

        // alternatively 'retryWhen' gives even more control about the retry logic

        // .retryWhen(attempts => attempts
        //   .zip(Observable.range(1, 3), (_, i) => i)
        //   .flatMap(i => {
        //     return Observable.timer(i * 1000)
        //   })
        // )
        .map((timeZoneInfo) => fetchTimeSuccess(timeZoneInfo))
        .catch((err) => Observable.of(fetchTimeError(err.message)))
    })
 */


export default [incrementEpic$, fetchTimeEpic$]
