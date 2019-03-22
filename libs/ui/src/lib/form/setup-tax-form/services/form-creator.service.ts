import { Injectable } from '@angular/core';

import {
  DropdownQuestion,
  QuestionBase,
  TextboxQuestion
} from '@tabularius/shared/ui';
@Injectable()
export class QuestionService {
  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {
    const questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'taxCode',
        label: 'Tax Code',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'taxDescription',
        label: 'Tax Descriptiom',
        required: true,
        order: 2
      }),

      new TextboxQuestion({
        key: 'taxPercentageRate',
        label: 'Tax Percentage Rate',
        required: true,
        order: 3
      }),

      new TextboxQuestion({
        key: 'basGrossAmount',
        label: 'BAS Gross Amount',
        order: 4
      }),

      new TextboxQuestion({
        key: 'basTaxAmount',
        label: 'BAS Tax Amount',
        order: 5
      }),

      new TextboxQuestion({
        key: 'paymentSummaryType',
        label: 'Payment Summary Type',
        order: 6
      }),

      new TextboxQuestion({
        key: 'grossAmountPayment',
        label: 'Gross Amount Payment',
        order: 7
      }),

      new TextboxQuestion({
        key: 'taxAmountPayment',
        label: 'Tax Amount Payment',
        order: 8
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
