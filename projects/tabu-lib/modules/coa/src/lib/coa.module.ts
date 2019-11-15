import { NgModule } from '@angular/core';
import { CoaComponent } from './container/coa.component';
import { CommonModule } from '@angular/common';
import { CoaRoutingModule } from './coa-routing.module';
import { EditAccountComponent } from './forms/edit-account/edit-account.component';
import { MaterialModule } from '@tabu-lib/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CoaComponent, EditAccountComponent],
  imports: [
    CommonModule,
    CoaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: []
})
export class CoaModule { }
