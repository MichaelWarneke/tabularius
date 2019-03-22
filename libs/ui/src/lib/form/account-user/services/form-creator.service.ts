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
        key: 'uid',
        label: 'ID',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        order: 2
      }),
      new TextboxQuestion({
        key: 'displayName',
        label: 'Display Name',
        order: 3
      }),
      new TextboxQuestion({
        key: 'photoURL',
        label: 'Photo URL',
        order: 4
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
