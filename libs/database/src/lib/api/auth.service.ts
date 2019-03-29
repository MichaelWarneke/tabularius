import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, ICredentials } from '@tabularius/shared/models';

@Injectable()
export abstract class IAuthService {
  abstract getAuthUser(): Observable<IUser | null>;
  abstract getAuthUserDisplayName(): Observable<string | undefined | null>;
  abstract updateAuthUserProfile(user: IUser): Observable<any>;
  abstract loginEmailPassword(credentials: ICredentials): Promise<any>;
  abstract logout(): Promise<any>;
}
