import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IUser {
  uid: string;
  email: string | null;
  photoURL?: string | null;
  displayName?: string | null;
}

export interface ICredentials {
  email?: string;
  userName?: string;
  password: string;
}

@Injectable()
export abstract class IAuthService {
  abstract getAuthUser(): Observable<IUser | null>;
  abstract getAuthUserDisplayName(): Observable<string | undefined | null>;
  abstract setAuthUserProfile(user: IUser): Promise<any>;
  abstract loginEmailPassword(credentials: ICredentials): Promise<any>;
}
