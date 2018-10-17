import {Epic, ofType} from 'redux-observable'
import {ignoreElements, tap} from 'rxjs/operators'

import Types from 'Types'
import {SaveUser} from './forms.actions'
import {FormsAction, FormsActionKeys} from './forms.types'

interface FormsEpic extends Epic<Types.RootAction, FormsAction, Types.RootState, Types.Services> {}

const fetchWordsEpic$: FormsEpic = (action$, state, {history}) =>
  action$.pipe(
    ofType<SaveUser>(FormsActionKeys.SAVE_USER),
    tap((action) => {
      history.push('/forms/users/')
      return
    }),
    ignoreElements(),
  )

export default [fetchWordsEpic$]
