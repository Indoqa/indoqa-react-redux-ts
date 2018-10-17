import {Action} from 'redux'
import {FormsActionKeys, User} from './forms.types'

export interface LoadUser extends Action {
  type: FormsActionKeys.LOAD_USER
  id: string,
}

export const loadUser = (id: string): LoadUser => ({
  type: FormsActionKeys.LOAD_USER,
  id,
})

// ----------------------------------------------------------------------------

export interface SaveUser extends Action {
  type: FormsActionKeys.SAVE_USER
  user: User,
}

export const saveUser = (user: User): SaveUser => ({
  type: FormsActionKeys.SAVE_USER,
  user,
})

// ----------------------------------------------------------------------------

export interface PostUser extends Action {
  type: FormsActionKeys.POST_USER
  user: User,
  setErrors: any,
}

export const postUser = (user: User, setErrors: any): PostUser => ({
  type: FormsActionKeys.POST_USER,
  user,
  setErrors,
})
