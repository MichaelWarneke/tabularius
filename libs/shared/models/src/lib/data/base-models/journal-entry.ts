export interface IJournalEntry{
    account: string | null;
    amount: number | null;
    currency: string | null;
    amountForeignCurrency: number | null;
    currencyForeign: string | null;  
    comment: string | null; 
} 