import { QuestionBase } from './question-base';

export class DatepickerQuestion extends QuestionBase<string> {
  controlType = 'datepicker';
  type: Date;

  constructor(options: any = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
