export interface IUser {
  uid: string | any;
  email: string | null | any;
  photoURL?: string | null;
  displayName?: string | null | undefined;
}

export interface ICredentials {
  email?: string;
  userName?: string;
  password: string;
}
