import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar.component';
import { SharedModule } from '@tabularius/shared/ui';

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [SharedModule],
  exports: [ProgressBarComponent]
})
export class ProgressBarModule {}
