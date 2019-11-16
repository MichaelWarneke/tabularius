import { Account } from '../models';

export let coaData = [
  {
    id: "Accountancy Fees"
    , name: "Accountancy Fees"
    , statement_name: "Income Statement"
    , group_name: "Expense"
    , subGroup_name: "Accountancy Fees"
  },
  {
    id: "Advertising"
    , name: "Advertising"
    , statement_name: "Income Statement"
    , group_name: "Expense"
    , subGroup_name: "Sales and marketing"
  },
  {
    id: "ASIC"
    , name: "ASIC"
    , statement_name: "Balance sheet"
    , group_name: "Current liabilities"
    , subGroup_name: "Accounts Payable"
  },
  {
    id: "Bank checking account"
    , name: "Bank checking account"
    , statement_name: "Balance sheet"
    , group_name: "Current assets"
    , subGroup_name: "Cash and cash equivalents"
  },
  {
    id: "Bank savings account"
    , name: "Bank savings account"
    , statement_name: "Balance sheet"
    , group_name: "Current assets"
    , subGroup_name: "Bank savings account"
  },
  {
    id: "DOT"
    , name: "DOT"
    , statement_name: "Balance sheet"
    , group_name: "Current liabilities"
    , subGroup_name: "Accounts Payable"
  },
  {
    id: "Dymocks"
    , name: "Dymocks"
    , statement_name: "Balance sheet"
    , group_name: "Current liabilities"
    , subGroup_name: "Accounts Payable"
  },
  {
    id: "Employee Warneke"
    , name: "Employee Warneke"
    , statement_name: "Balance sheet"
    , group_name: "Current liabilities"
    , subGroup_name: "Wages Payable"
  },
  {
    id: "Employer Superannuation Payable"
    , name: "Employer Superannuation Payable"
    , statement_name: "Balance sheet"
    , group_name: "Current liabilities"
    , subGroup_name: "Employer Superannuation Payable"
  },
  {
    id: "Francis A. Jones"
    , name: "Francis A. Jones"
    , statement_name: "Balance sheet"
    , group_name: "Current liabilities"
    , subGroup_name: "Accounts Payable"
  },
  {
    id: "Fuel and oil for motor vehicles"
    , name: "Fuel and oil for motor vehicles"
    , statement_name: "Income Statement"
    , group_name: "Expense"
    , subGroup_name: "Motor Vehicle expenses"
  },
  {
    id: "Gas Station"
    , name: "Gas Station"
    , statement_name: "Balance sheet"
    , group_name: "Current liabilities"
    , subGroup_name: "Accounts Payable"
  },
  {
    id: "Go Daddy"
    , name: "Go Daddy"
    , statement_name: "Balance sheet"
    , group_name: "Current liabilities"
    , subGroup_name: "Accounts Payable"
  },
  {
    id: "GST Taxable Purchase"
    , name: "GST Taxable Purchase"
    , statement_name: "Balance sheet"
    , group_name: "Current assets"
    , subGroup_name: "GST receivable"
  },
  {
    id: "GST Taxable Sale"
    , name: "GST Taxable Sale"
    , statement_name: "Balance sheet"
    , group_name: "Current liabilities"
    , subGroup_name: "GST payable"
  },
  {
    id: "HHL"
    , name: "HHL"
    , statement_name: "Balance sheet"
    , group_name: "Current assets"
    , subGroup_name: "Accounts receivable"
  },
  {
    id: "JB Hifi"
    , name: "JB Hifi"
    , statement_name: "Balance sheet"
    , group_name: "Current liabilities"
    , subGroup_name: "Accounts Payable"
  },
  {
    id: "Motor Vehicle Registration and Insurance"
    , name: "Motor Vehicle Registration and Insurance"
    , statement_name: "Income Statement"
    , group_name: "Expense"
    , subGroup_name: "Motor Vehicle expenses"
  },
  {
    id: "Office Works"
    , name: "Office Works"
    , statement_name: "Balance sheet"
    , group_name: "Current liabilities"
    , subGroup_name: "Accounts Payable"
  },
  {
    id: "Other Expenses"
    , name: "Other Expenses"
    , statement_name: "Income Statement"
    , group_name: "Expense"
    , subGroup_name: "Other Expenses"
  },
  {
    id: "Owner Warneke"
    , name: "Owner Warneke"
    , statement_name: "Balance sheet"
    , group_name: "Long-term liabilities"
    , subGroup_name: "Loans"
  },
  {
    id: "Parking Facility"
    , name: "Parking Facility"
    , statement_name: "Balance sheet"
    , group_name: "Current liabilities"
    , subGroup_name: "Accounts Payable"
  },
  {
    id: "Parking Fees"
    , name: "Parking Fees"
    , statement_name: "Income Statement"
    , group_name: "Expense"
    , subGroup_name: "Travel Expenses"
  },
  {
    id: "PAYG Withheld"
    , name: "PAYG Withheld"
    , statement_name: "Balance sheet"
    , group_name: "Current liabilities"
    , subGroup_name: "PAYG Withheld"
  },
  {
    id: "Plant & Equipment"
    , name: "Plant & Equipment"
    , statement_name: "Balance sheet"
    , group_name: "Expense"
    , subGroup_name: "Property, plant and equipment"
  },
  {
    id: "Printing & Stationery"
    , name: "Printing & Stationery"
    , statement_name: "Income Statement"
    , group_name: "Expense"
    , subGroup_name: "General and administrative"
  },
  {
    id: "RAC"
    , name: "RAC"
    , statement_name: "Balance sheet"
    , group_name: "Current liabilities"
    , subGroup_name: "Accounts Payable"
  },
  {
    id: "Sale Consultancy"
    , name: "Sale Consultancy"
    , statement_name: "Income Statement"
    , group_name: "Income"
    , subGroup_name: "Revenue"
  },
  {
    id: "Sale Reimbursment"
    , name: "Sale Reimbursment"
    , statement_name: "Income Statement"
    , group_name: "Income"
    , subGroup_name: "Client Reimbursments"
  },
  {
    id: "Superannuation Contributions"
    , name: "Superannuation Contributions"
    , statement_name: "Income Statement"
    , group_name: "Expense"
    , subGroup_name: "Superannuation Contributions"
  },
  {
    id: "Telephone"
    , name: "Telephone"
    , statement_name: "Income Statement"
    , group_name: "Expense"
    , subGroup_name: "General and administrative"
  },
  {
    id: "Telstra"
    , name: "Telstra"
    , statement_name: "Balance sheet"
    , group_name: "Current liabilities"
    , subGroup_name: "Accounts Payable"
  },
  {
    id: "Wages"
    , name: "Wages"
    , statement_name: "Income Statement"
    , group_name: "Expense"
    , subGroup_name: "Wages"
  }];
