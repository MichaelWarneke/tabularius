import { NgModule } from '@angular/core';
import { BalanceComponent } from './container/balance.component';
import { CommonModule } from '@angular/common';
import { BalanceRoutingModule } from './balance-routing.module';



@NgModule({
  declarations: [BalanceComponent],
  imports: [
    CommonModule,
    BalanceRoutingModule
  ],
  exports: []
})
export class BalanceModule { }
