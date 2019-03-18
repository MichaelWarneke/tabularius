import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiAuthFacade } from '@tabularius/core/store';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {
  constructor(private auth: ApiAuthFacade, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isAuth$.pipe(
      take(1),
      tap(loggedIn => {
        if (!loggedIn) {
          console.warn('Access denied');
          this.router.navigate(['/account']);
        }
      })
    );
  }
}
