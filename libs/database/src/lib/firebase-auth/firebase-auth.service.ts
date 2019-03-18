import { Injectable } from '@angular/core';
import { IAuthService, IUser, ICredentials } from '../api/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { switchMap, startWith, tap, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService implements IAuthService {
  constructor(private afAuth: AngularFireAuth) {}

  getAuthUser(): Observable<IUser | null> {
    return this.afAuth.authState.pipe(
      map(user => {
        if (user) {
          return {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoUrl: user.photoURL
          };
        } else {
          return null;
        }
      })
    );
  }

  getAuthUserDisplayName(): Observable<string | undefined | null> {
    return this.getAuthUser().pipe(
      map(user => {
        if (user) {
          return user.displayName;
        } else {
          return undefined;
        }
      })
    );
  }

  async setAuthUserProfile(user: IUser): Promise<any> {
    return Promise.reject('TODO');
  }

  async loginEmailPassword(credentials: ICredentials): Promise<any> {
    if (credentials.email) {
      return this.afAuth.auth.signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      );
    } else {
      return Promise.reject('No Email Provided');
    }
  }
}
