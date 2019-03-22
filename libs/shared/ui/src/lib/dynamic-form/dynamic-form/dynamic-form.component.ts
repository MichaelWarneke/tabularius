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
  @Input() questions: QuestionBase<any>[] = [];
  @Input() deleteButton = false;
  @Input() copyButton = false;
  @Input()
  set data(data: any | null) {
    if (this.form)
      if (data) {
        this.form.patchValue(data);
      } else {
        this.form.reset();
      }
  }

  @Output() save = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() copy = new EventEmitter<any>();

  form: FormGroup | null = null;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    if (this.form) this.payLoad = JSON.stringify(this.form.value);
  }
}
