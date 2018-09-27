import {ignoreElements, filter, tap} from 'rxjs/operators'
import {Epic} from 'redux-observable'
import {isActionOf} from 'typesafe-actions'

import Types from 'Types'
import {increment} from './time.actions'

/* tslint:disable:no-console */
const timeEpic$: Epic<Types.RootAction, Types.RootAction, Types.RootState, Types.Services> = (action$, state, s) =>
  action$.pipe(
    filter(isActionOf(increment)),
    tap((x) => console.log('xxxxyz1', s.ajax)),
    ignoreElements(),
  )

export default timeEpic$
