import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './views/start/start.component';
import { BalanceComponent } from './views/balance/balance.component';
import { JournalComponent } from './views/journal/journal.component';
import { PAndLComponent } from './views/p-and-l/p-and-l.component';
import { CoaComponent } from './views/coa/coa.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'balance', component: BalanceComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'p&l', component: PAndLComponent },
  { path: 'coa', component: CoaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
