import { NgModule } from '@angular/core';
import { PAndLComponent } from './container/p-and-l.component';
import { CommonModule } from '@angular/common';
import { PAndLRoutingModule } from './p-and-l-routing.module';



@NgModule({
  declarations: [PAndLComponent],
  imports: [
    CommonModule,
    PAndLRoutingModule
  ],
  exports: []
})
export class PAndLModule { }
