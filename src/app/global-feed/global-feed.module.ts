import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GlobalFeedComponent } from 'src/app/global-feed/components/global-feed/global-feed.component'
import { RouterModule } from '@angular/router'
import { FeedModule } from 'src/app/shared/modules/feed/feed.module'
import { BannerModule } from 'src/app/shared/modules/banner/banner.module'

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
]

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
  ],
})
export class GlobalFeedModule {}
