import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, ICredentials } from '@tabularius/shared/models';

@Injectable()
export abstract class IAuthService {
  abstract getAuthUser(): Observable<IUser | null>;
  abstract getAuthUserDisplayName(): Observable<string | undefined | null>;
  abstract updateAuthUserProfile(user: IUser): Promise<any>;
  abstract loginEmailPassword(credentials: ICredentials): Promise<any>;
  abstract login(): Promise<any>;
  abstract logout(): Promise<any>;
}
