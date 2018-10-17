import {FormsAction, FormsActionKeys, FormsState, User} from './forms.types'

const user1: User = {
  id: 'HyJifGwFG',
  name: 'Maier',
  email: 'w.maier@example.com',
  addresses: [
    {
      street: 'Schottenring 3',
      city: 'Vienna',
      zipCode: '1010',
      country: 'Austria',
    },
    {
      street: 'Heinrichstrasse 7',
      city: 'Graz',
      zipCode: '8010',
      country: 'Austria',
    },
  ],
  lastModified: new Date(),
}

const user2: User = {
  id: 'r1rozfvFf',
  name: 'Gruber',
  email: 'f.gruber@example.com',
  addresses: [],
  lastModified: new Date(),
}

const initialState: FormsState = {
  users: {
    [user1.id]: user1,
    [user2.id]: user2,
  },
  currentUser: null,
}

export default (state: FormsState = initialState, action: FormsAction): FormsState => {
  switch (action.type) {
    case FormsActionKeys.SAVE_USER:
      return {
        ...state,
        users: {
          ...state.users,
          [action.user.id]: {
            ...action.user,
            addresses: [
              ...action.user.addresses,
            ],
            lastModified: new Date(),
          },
        },
      }

    case FormsActionKeys.LOAD_USER:
      return {
        ...state,
        currentUser: state.users[action.id],
      }

    default:
      return state
  }
}
