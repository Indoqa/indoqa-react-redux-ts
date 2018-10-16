import {Address, User} from './forms.types'

export const createNewUser = (): User => {
  return {
    id: '',
    name: '',
    email: '',
    addresses: [],
    lastModified: new Date(),
  }
}

export const createNewAddress = (): Address => ({
  street: '',
  city: '',
  zipCode: '',
  country: '',
})
