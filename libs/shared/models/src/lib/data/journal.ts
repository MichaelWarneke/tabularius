import { ITabuBase } from './base-models';
import { IJournalEntry } from './base-models';

export interface IJournal extends ITabuBase {
  date: Date | null | any;
  dateOfTransaction: Date | null;
  dateOfEstimateTransaction: Date | null;
  customer: string | null;
  supplier: string | null;
  employee: string | null;
  comment: string | null;
  entries: IJournalEntry[];
}
