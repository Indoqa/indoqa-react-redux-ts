import {ignoreElements, filter, tap} from 'rxjs/operators'
import {Epic} from 'redux-observable'
import {isOfType} from 'typesafe-actions'

import {TimeAction, TimeState} from './time.reducer'
import {TOGGLE} from './time.constants'

/* tslint:disable:no-console */
const timeEpic$: Epic<TimeAction, any, TimeState> = (action$) =>
  action$.pipe(
    filter(isOfType(TOGGLE)),
    tap((x) => console.log('xxxxyz', x)),
    ignoreElements(),
  )

export default timeEpic$
