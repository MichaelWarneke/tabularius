import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', loadChildren: '@tabu-lib/modules/home#HomeModule' },
  { path: 'balance', loadChildren: '@tabu-lib/modules/balance#BalanceModule' },
  { path: 'journal', loadChildren: '@tabu-lib/modules/journal#JournalModule' },
  { path: 'p&l', loadChildren: '@tabu-lib/modules/p-and-l#PAndLModule' },
  { path: 'coa', loadChildren: '@tabu-lib/modules/coa#CoaModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
