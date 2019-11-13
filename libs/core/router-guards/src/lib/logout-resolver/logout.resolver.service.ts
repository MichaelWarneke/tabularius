import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { ApiAuthFacade } from '@tabularius/core/store';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutResolverService implements Resolve<boolean> {
  constructor(private auth: ApiAuthFacade, private router: Router) {}

  resolve(): Observable<boolean> {
    this.auth.logout();
    this.router.navigate(['/account/login']);
    return of(true);
  }
}
