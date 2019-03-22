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
  _form: FormGroup | null = null;
  @Input() question: QuestionBase<any> | null = null;
  @Input()
  set form(form: FormGroup | null) {
    this._form = form;
    if (this._form) {
      this._form.markAsPristine();
      this._form.markAsUntouched();
    }
  }
  get form() {
    return this._form;
  }
  get isValid() {
    if (
      this.form &&
      this.question &&
      this.form.controls[this.question.key].touched &&
      this.form.controls[this.question.key].dirty
    ) {
      return this.form.controls[this.question.key].valid;
    } else {
      return true;
    }
  }
}
