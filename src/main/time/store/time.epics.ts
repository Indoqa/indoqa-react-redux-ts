import {ignoreElements, filter, tap} from 'rxjs/operators'
import {Epic} from 'redux-observable'
import {isOfType} from 'typesafe-actions'

import Types from 'Types'
import {TOGGLE} from './time.constants'

/* tslint:disable:no-console */
const timeEpic$: Epic<Types.RootAction, Types.RootAction, Types.RootState, any> = (action$) =>
  action$.pipe(
    filter(isOfType(TOGGLE)),
    tap((x) => console.log('xxxxyz', x)),
    ignoreElements(),
  )

export default timeEpic$
