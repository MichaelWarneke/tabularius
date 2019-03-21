import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiAuthFacade } from '@tabularius/core/store';

@Component({
  selector: 'app-shell-container',
  templateUrl: './app-shell-container.component.html',
  styleUrls: ['./app-shell-container.component.scss']
})
export class AppShellContainerComponent {
  userDisplayName$: Observable<string | null | undefined>;

  constructor(private store: ApiAuthFacade) {
    this.userDisplayName$ = this.store.userName$;
  }
}
