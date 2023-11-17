import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap, of } from 'rxjs'
import { FeedService } from 'src/app/shared/modules/feed/service/feed.service'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from 'src/app/shared/modules/feed/store/actions/get-feed.action'
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/get-feed-response.interface'

@Injectable()
export class GetFeedEffect {
  getFeedEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccessAction({ feed })
          }),
          catchError(() => {
            return of(getFeedFailureAction())
          }),
        )
      }),
    ),
  )

  constructor(
    private actions$: Actions,
    private feedService: FeedService,
  ) {}
}
