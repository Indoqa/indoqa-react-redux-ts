import {action} from 'typesafe-actions'

import {INCREMENT} from './time.constants'

export const increment = (payload: number) => action(INCREMENT, payload)
