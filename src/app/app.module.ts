import { NgModule, isDevMode } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AuthModule } from 'src/app/auth/auth.module'
import { AppComponent } from 'src/app/app.component'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects'
import { TopBarModule } from 'src/app/shared/modules/top-bar/top-bar.module'
import { PersistenceService } from 'src/app/shared/services/persistence.service'
import { AuthInterceptor } from 'src/app/shared/services/auth-interceptor.service'
import { GlobalFeedModule } from 'src/app/global-feed/global-feed.module'
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ router: routerReducer }, {}),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectOutsideZone: true,
    }),
    EffectsModule.forRoot([]),
    TopBarModule,
    GlobalFeedModule,
  ],
  providers: [
    PersistenceService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
