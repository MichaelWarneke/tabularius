import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// @ts-ignore
import {
  getAllDataFromLocalForage,
  default as localForage,
} from 'ngrx-store-persist';

if (environment.production) {
  enableProdMode();
}
getAllDataFromLocalForage({
  driver: localForage.INDEXEDDB,
  keys: [
    'accounts'
  ],
  storage: null
}).then(() => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
});
