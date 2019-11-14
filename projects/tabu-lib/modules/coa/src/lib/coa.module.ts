import { NgModule } from '@angular/core';
import { CoaComponent } from './container/coa.component';
import { CommonModule } from '@angular/common';
import { CoaRoutingModule } from './coa-routing.module';



@NgModule({
  declarations: [CoaComponent],
  imports: [
    CommonModule,
    CoaRoutingModule
  ],
  exports: []
})
export class CoaModule { }
