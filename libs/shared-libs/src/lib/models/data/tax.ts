import { ITabuBase } from './base-models/base';

export interface ITax extends ITabuBase {
  taxCode: string | null;
  taxDescription: string | null;
  taxPercentageRate: number | null;

  //////////////////////////
  // Activity Statement (BAS) Classification

  // BAS Item for Gross Amount
  basGrossAmount: string | null;
  // BAS Item for Tax Amount
  basTaxAmount: string | null;

  //////////////////////////
  // Payment Summary Reporting (for employees); and Taxable Payments Annual Report (for construction industry contractors)

  // Payment summary type
  paymentSummaryType: string | null;
  // Gross Amount Payment Summary Item
  grossAmountPayment: string | null;
  // Tax Amount Payment Summary Item
  taxAmountPayment: string | null;
}
