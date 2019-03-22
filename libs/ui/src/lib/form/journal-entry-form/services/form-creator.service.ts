import { Injectable } from '@angular/core';

import {
  DropdownQuestion,
  QuestionBase,
  TextboxQuestion,
  DatepickerQuestion
} from '@tabularius/shared/ui';
@Injectable()
export class QuestionService {
  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {
    const questions: QuestionBase<any>[] = [
      new DatepickerQuestion({
        key: 'date',
        label: 'Date',
        required: true,
        order: 1
      }),

      new DatepickerQuestion({
        key: 'dateOfTransaction',
        label: 'Date of Transaction',
        order: 2
      }),

      new DatepickerQuestion({
        key: 'dateOfEstimateTransaction',
        label: 'Date of estimated Transaction',
        order: 3
      }),
      /*
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      }),
*/
      new TextboxQuestion({
        key: 'customer',
        label: 'Customer',
        order: 4
      }),

      new TextboxQuestion({
        key: 'supplier',
        label: 'Supplier',
        order: 5
      }),

      new TextboxQuestion({
        key: 'employee',
        label: 'Employee',
        order: 6
      }),

      new TextboxQuestion({
        key: 'comment',
        label: 'Comment',
        order: 7
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
