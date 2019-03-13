import { ITabuBase } from './base-models/base';

export interface ITax extends ITabuBase {
  taxCode: string | null | any;
  taxDescription: string | null | any;
  taxPercentageRate: number | null | any;

  //////////////////////////
  // Activity Statement (BAS) Classification

  // BAS Item for Gross Amount
  basGrossAmount: string | null | any;
  // BAS Item for Tax Amount
  basTaxAmount: string | null | any;

  //////////////////////////
  // Payment Summary Reporting (for employees); and Taxable Payments Annual Report (for construction industry contractors)

  // Payment summary type
  paymentSummaryType: string | null | any;
  // Gross Amount Payment Summary Item
  grossAmountPayment: string | null | any;
  // Tax Amount Payment Summary Item
  taxAmountPayment: string | null | any;
}
