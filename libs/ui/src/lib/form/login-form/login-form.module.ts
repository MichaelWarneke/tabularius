import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form.component';
import { SharedModule } from '@tabularius/shared/ui';
import { DynamicFormModule } from '@tabularius/shared/dynamic-form';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [SharedModule, DynamicFormModule],
  exports: [LoginFormComponent]
})
export class LoginFormModule {}
