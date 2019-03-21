import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar.component';
import { SharedUiModule } from '@tabularius/shared/ui';

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [SharedUiModule],
  exports: [ProgressBarComponent]
})
export class ProgressBarModule { }
