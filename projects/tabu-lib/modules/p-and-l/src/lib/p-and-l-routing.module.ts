import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PAndLComponent } from './container/p-and-l.component';


const routes: Routes = [
  { path: '', component: PAndLComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PAndLRoutingModule { }
