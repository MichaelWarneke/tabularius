import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoaComponent } from './container/coa.component';


const routes: Routes = [
  { path: '', component: CoaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoaRoutingModule { }
