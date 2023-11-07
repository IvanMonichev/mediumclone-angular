import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../action-types'
import { RegisterRequestInterface } from 'src/app/auth/types/register-request.interface'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterRequestInterface>(),
)
