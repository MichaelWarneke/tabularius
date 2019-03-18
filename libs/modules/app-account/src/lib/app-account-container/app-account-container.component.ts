import { Component, OnInit } from '@angular/core';
import { ApiAuthFacade } from '@tabularius/core/store';
import { Observable } from 'rxjs';
import { IUser } from '@tabularius/shared/models';
import { IAuthService } from '@tabularius/database';

@Component({
  selector: 'app-account-app-account-container',
  templateUrl: './app-account-container.component.html',
  styleUrls: ['./app-account-container.component.scss']
})
export class AppAccountContainerComponent implements OnInit {
  user$: Observable<IUser | null>;
  constructor(private store: ApiAuthFacade, private db: IAuthService) {
    this.user$ = store.user$;
  }

  ngOnInit() {}

  save(user: IUser) {
    this.store.updateUser(user);
  }

  login() {
    this.db.login();
  }

  logout() {
    this.db.logout();
  }
}
