import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiAuthFacade } from '@tabularius/core/store';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {
  constructor(private auth: ApiAuthFacade, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    return this.auth.isAuth$.pipe(
      take(1),
      tap(loggedIn => {
        if (!loggedIn) {
          console.warn('Access denied');
          this.auth.redirectLogin(url);
        }
      })
    );
  }
}
