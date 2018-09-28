import {ignoreElements, filter, tap} from 'rxjs/operators'
import {Epic} from 'redux-observable'
import {isActionOf} from 'typesafe-actions'

import Types from 'Types'
import {increment} from './time.actions'

interface TimeEpic extends Epic<Types.RootAction, Types.RootAction, Types.RootState, Types.Services> {}

/* tslint:disable:no-console */
const incrementEpic$: TimeEpic = (action$, state, s) =>
  action$.pipe(
    filter(isActionOf(increment)),
    tap((x) => console.log('xxxxyz1', s.ajax)),
    ignoreElements(),
  )

export default [incrementEpic$]
