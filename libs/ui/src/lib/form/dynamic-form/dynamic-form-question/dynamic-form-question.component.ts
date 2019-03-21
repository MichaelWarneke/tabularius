import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../models/question-base';

@Component({
  selector: 'tabu-app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any> | null = null;
  @Input() form: FormGroup | null = null;
  get isValid() {
    if (this.form && this.question)
      return this.form.controls[this.question.key].valid;
  }
}
