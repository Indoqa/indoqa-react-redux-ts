import {Epic, ofType} from 'redux-observable'
import {Observable} from 'rxjs/internal/Observable'
import {of} from 'rxjs/internal/observable/of'
import {mergeMap} from 'rxjs/operators'

import Types from 'Types'
import {SaveUser, saveUserError, saveUserSuccess} from './forms.actions'
import {FormsAction, FormsActionKeys} from './forms.types'

interface FormsEpic extends Epic<Types.RootAction, FormsAction, Types.RootState, Types.Services> {}

const doSaveForm = (action: SaveUser, history: any): Observable<FormsAction> => {
  if (action.user.name.startsWith('G')) {
    action.setErrors({name: 'Names starting with \'G\' are not allowed.'})
    return of(saveUserError())
  }
  history.push('/forms/users/')
  return of(saveUserSuccess(action.user))
}

const fetchWordsEpic$: FormsEpic = (action$, state, {history}) =>
  action$.pipe(
    ofType<SaveUser>(FormsActionKeys.SAVE_USER),
    mergeMap((action) => doSaveForm(action, history)),
  )

export default [fetchWordsEpic$]
