import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { RegisterComponent } from 'src/app/auth/components/register/register.component'
import { StoreModule } from '@ngrx/store'
import { reducers } from 'src/app/auth/store/reducers'
import { AuthService } from 'src/app/auth/services/auth.service'
import { EffectsModule } from '@ngrx/effects'
import { RegisterEffect } from 'src/app/auth/store/effects/register.effect'
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backend-error-messages/backend-error-messages.module'
import { PersistenceService } from 'src/app/shared/services/persistence.service'
import { LoginEffect } from 'src/app/auth/store/effects/login.effect'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
