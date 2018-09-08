import { StateType } from 'typesafe-actions';
import { RouterAction, LocationChangeAction } from 'react-router-redux';

import {TimeAction} from '../time'
import rootReducer from './rootReducer'

type ReactRouterAction = RouterAction | LocationChangeAction

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>;
  export type RootAction = ReactRouterAction | TimeAction;
}
