import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ErrorMessageComponent } from 'src/app/shared/modules/error-message/components/error-message/error-message.component'
import { LoadingComponent } from 'src/app/shared/modules/loading/components/loading/loading.component'

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent],
})
export class LoadingModule {}
