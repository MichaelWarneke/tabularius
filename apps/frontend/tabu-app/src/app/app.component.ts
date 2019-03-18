import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiAuthFacade } from '@tabularius/core/store';
import { map } from 'rxjs/operators';
import { IUser } from '@tabularius/shared/models';

@Component({
  selector: 'tabu-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tabularius';
  userDisplayName$: Observable<string | null | undefined>;
  constructor(private store: ApiAuthFacade) {
    this.userDisplayName$ = store.userName$;
  }
}
