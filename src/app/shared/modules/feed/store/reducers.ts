import { FeedStateInterface } from 'src/app/shared/modules/feed/types/feed-state.interface'
import { Action, createReducer, on } from '@ngrx/store'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from 'src/app/shared/modules/feed/store/actions/get-feed.action'
import { routerNavigatedAction } from '@ngrx/router-store'

const initialState: FeedStateInterface = {
  isLoading: true,
  error: null,
  data: null,
}

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({ ...state, isLoading: true }),
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    }),
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({ ...state, isLoading: false }),
  ),
  on(routerNavigatedAction, (): FeedStateInterface => initialState),
)

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action)
}
