import { Injectable, OnDestroy } from '@angular/core';
import { IAuthService } from '../api/auth.service';
import { IUser, ICredentials } from '@tabularius/shared/models';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of, throwError } from 'rxjs';
import { switchMap, startWith, tap, filter, map } from 'rxjs/operators';
//import { testCredentials } from '../firebase/firebase-key';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService implements IAuthService {
  constructor(private afAuth: AngularFireAuth) {}

  getAuthUser(): Observable<IUser | null> {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return of({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoUrl: user.photoURL
          } as IUser);
        } else {
          return of(null);
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

  updateAuthUserProfile(user: IUser): Observable<boolean> {
    if (
      user &&
      user.uid &&
      user.uid.length > 1 &&
      user.email &&
      user.email.length > 1
    ) {
      if (this.afAuth.auth.currentUser) {
        this.afAuth.auth.currentUser
          .updateProfile({
            displayName: user.displayName,
            photoURL: user.photoURL
          })
          .then(() => of(true), err => throwError(err));
      } else {
        throwError({ error: 'setAuthUserProfile: User not set properly' });
      }
    } else {
      throwError({ error: 'setAuthUserProfile: User not set properly' });
    }
    return of(false);
  }

  async loginEmailPassword(credentials: ICredentials): Promise<any> {
    if (credentials.email) {
      return this.afAuth.auth.signInWithEmailAndPassword(
        //        testCredentials.email,
        //        testCredentials.password
        credentials.email,
        credentials.password
      );
    } else {
      return Promise.reject('No Email Provided');
    }
  }

  async logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }
}
