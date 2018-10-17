import {LoadUser, PostUser, SaveUser} from './forms.actions'

export type FormsAction =
  LoadUser
  | SaveUser
  | PostUser

export enum FormsActionKeys {
  LOAD_USER = 'forms/LOAD_USER',
  SAVE_USER = 'forms/SAVE_USER',
  POST_USER = 'forms/POST_USER',
}

export type FormsState = {
  users: { [key: string]: User },
  currentUser: User | null,
}

export interface Address {
  street?: string,
  city?: string,
  zipCode: string,
  country: string,
}

export interface User {
  id: string,
  name: string,
  email: string,
  lastModified: Date,
  addresses: Address[],
}
