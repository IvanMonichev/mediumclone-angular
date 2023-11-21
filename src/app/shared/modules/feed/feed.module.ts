import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from 'src/app/shared/modules/feed/components/global-feed/feed.component'
import { EffectsModule } from '@ngrx/effects'
import { GetFeedEffect } from 'src/app/shared/modules/feed/store/effects/get-feed.effect'
import { StoreModule } from '@ngrx/store'
import { reducers } from 'src/app/shared/modules/feed/store/reducers'
import { FeedService } from 'src/app/shared/modules/feed/service/feed.service'
import { RouterLink, RouterModule } from '@angular/router'
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module'
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module'
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module'
import { TagListModule } from 'src/app/shared/modules/tag-list/tag-list.module'
@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
