import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../models/question-base';
import { QuestionControlService } from '../dynamic-form.service';

@Component({
  selector: 'tabu-app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [QuestionControlService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent implements OnInit {
  _data: any | null = null;
  @Input() questions: QuestionBase<any>[] = [];
  @Input() deleteButton = false;
  @Input() copyButton = false;
  @Input()
  set data(data: any | null) {
    this._data = data;
    if (this.form)
      if (data) {
        this.form.patchValue(data);
      } else {
        this.form.reset();
      }
  }

  get data() {
    return this._data;
  }

  @Output() save = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() copy = new EventEmitter<any>();

  form: FormGroup | null = null;

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  onSubmit() {
    if (this.form) {
      this.save.emit(this.form.value);
      console.warn('onSubmit :', this.form.value);
    }
  }
}
