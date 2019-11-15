import { NgModule } from '@angular/core';
import { CoaComponent } from './container/coa.component';
import { CommonModule } from '@angular/common';
import { CoaRoutingModule } from './coa-routing.module';
import { EditAccountComponent } from './forms/edit-account/edit-account.component';
import { MaterialModule } from '@tabu-lib/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromCoa from './reducers';
import * as fromAcconts from './reducers/account.reducer';
import { ListAccountComponent } from './forms/list-account/list-account.component';
import { ListItemAccountComponent } from './forms/list-item-account/list-item-account.component';



@NgModule({
  declarations: [CoaComponent, EditAccountComponent, ListAccountComponent, ListItemAccountComponent],
  imports: [
    CommonModule,
    CoaRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature(fromCoa.coaFeatureKey, fromCoa.reducers, { metaReducers: fromCoa.metaReducers }),
    StoreModule.forFeature(fromAcconts.accountsFeatureKey, fromAcconts.reducer)
  ],
  exports: []
})
export class CoaModule { }
