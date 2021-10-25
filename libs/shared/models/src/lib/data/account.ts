import { ITabuBase } from './base-models/base';

export interface IAccount extends ITabuBase {
  id?: string | null;
  name: string | null;
  type: string | null;
  active: boolean;
}
