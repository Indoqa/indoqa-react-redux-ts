import {Epic, ofType} from 'redux-observable'
import {Observable} from 'rxjs/internal/Observable'
import {of} from 'rxjs/internal/observable/of'
import {mergeMap} from 'rxjs/operators'

import Types from 'Types'
import {SaveUser, saveUserError, saveUserSuccess} from './forms.actions'
import {FormsAction, FormsActionKeys} from './forms.types'

interface FormsEpic extends Epic<Types.RootAction, FormsAction, Types.RootState, Types.Services> {}

const fetchWordsEpic$: FormsEpic = (action$, state, {history}) =>
  action$.pipe(
    ofType<SaveUser>(FormsActionKeys.SAVE_USER),
    mergeMap((action) => {
      // early returns within the if statement do not work with Typescript, hence assigning
      // the observable to a variable
      let nextAction: Observable<FormsAction>
      if (action.user.name.startsWith('G')) {
        action.setErrors({name: 'Names starting with \'G\' are not allowed.'})
        nextAction = of(saveUserError())
      } else {
        history.push('/forms/users/')
        nextAction = of(saveUserSuccess(action.user))
      }
      return nextAction
    }),
  )

export default [fetchWordsEpic$]
