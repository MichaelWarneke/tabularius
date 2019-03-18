export interface IUser {
  uid: string;
  email: string | null;
  photoURL?: string | null;
  displayName?: string | null | undefined;
}

export interface ICredentials {
  email?: string;
  userName?: string;
  password: string;
}
