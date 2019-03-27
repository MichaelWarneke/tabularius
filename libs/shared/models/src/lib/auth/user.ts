export interface IUserAbstract {
  uid: any;
  email: any;
  photoURL?: any;
  displayName?: any;
}

export abstract class IUser implements IUserAbstract {
  uid: string | any;
  email: string | null | any;
  photoURL?: string | null;
  displayName?: string | null | undefined;
}

export interface ICredentialsAbstract {
  email?: any;
  userName?: any;
  password: any;
}
export abstract class ICredentials implements ICredentialsAbstract {
  email?: string;
  userName?: string;
  password = '';
}
