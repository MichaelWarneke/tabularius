import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiAuthFacade } from '@tabularius/core/store';

@Component({
  selector: 'tabu-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tabularius';
  userDisplayName$: Observable<string | null | undefined> = of(null);
  constructor(private store: ApiAuthFacade) {
    this.userDisplayName$ = this.store.userName$;
  }
}
