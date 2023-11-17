import { createAction, props } from '@ngrx/store'
import { ActionsTypes } from 'src/app/shared/modules/feed/store/actions-types'
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/get-feed-response.interface'

export const getFeedAction = createAction(
  ActionsTypes.GET_FEED,
  props<{ url: string }>(),
)

export const getFeedSuccessAction = createAction(
  ActionsTypes.GET_FEED_SUCCESS,
  props<{ feed: GetFeedResponseInterface }>(),
)

export const getFeedFailureAction = createAction(ActionsTypes.GET_FEED_FAILURE)
