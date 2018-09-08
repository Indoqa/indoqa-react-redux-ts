import {ignoreElements, filter} from 'rxjs/operators';
import {Epic} from "redux-observable"
import {isOfType} from "typesafe-actions"

import {TimeAction, TimeState} from "./time.reducer"
import {TOGGLE} from "./time.constants"

const timeEpic$: Epic<TimeAction, TimeState> = (action$) =>
  action$.pipe(
    filter(isOfType(TOGGLE)),
    ignoreElements())

export default timeEpic$
