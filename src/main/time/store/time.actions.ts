import {action} from 'typesafe-actions'

import {TOGGLE} from './time.constants'

export const toggle = (id: string) => action(TOGGLE, id)
