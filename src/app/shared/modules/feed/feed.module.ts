import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from 'src/app/shared/modules/feed/components/global-feed/feed.component'
import { EffectsModule } from '@ngrx/effects'
import { GetFeedEffect } from 'src/app/shared/modules/feed/store/effects/get-feed.effect'
import { StoreModule } from '@ngrx/store'
import { reducers } from 'src/app/shared/modules/feed/store/reducers'
import { FeedService } from 'src/app/shared/modules/feed/service/feed.service'
import { RouterLink, RouterModule } from '@angular/router'
@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
