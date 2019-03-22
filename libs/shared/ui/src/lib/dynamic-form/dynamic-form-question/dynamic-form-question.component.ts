import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../models/question-base';

@Component({
  selector: 'tabu-app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any> | null = null;
  @Input() form: FormGroup | null = null;
  get isValid() {
    if (this.form && this.question)
      return this.form.controls[this.question.key].valid;
  }
}
