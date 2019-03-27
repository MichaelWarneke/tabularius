import { ITabuBase } from './base-models';
import { IJournalEntry } from './base-models';

export interface IJournal extends ITabuBase {
  date: Date | null | any;
  dateOfTransaction: Date | null | any;
  dateOfEstimateTransaction: Date | null | any;
  customer: string | null | any;
  supplier: string | null | any;
  employee: string | null | any;
  comment: string | null | any;
  entries: IJournalEntry[];
}
