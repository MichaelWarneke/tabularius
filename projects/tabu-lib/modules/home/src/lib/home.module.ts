import { NgModule } from '@angular/core';
import { HomeComponent } from './container/home.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: []
})
export class HomeModule { }
