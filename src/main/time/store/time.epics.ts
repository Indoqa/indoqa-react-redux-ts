import {ignoreElements, filter, tap} from 'rxjs/operators'
import {Epic} from 'redux-observable'
import {isOfType} from 'typesafe-actions'

import Types from 'Types'
import {INCREMENT} from './time.constants'

/* tslint:disable:no-console */
const timeEpic$: Epic<Types.RootAction, Types.RootAction, Types.RootState, any> = (action$) =>
  action$.pipe(
    filter(isOfType(INCREMENT)),
    tap((x) => console.log('xxxxyz1', x)),
    ignoreElements(),
  )

export default timeEpic$
