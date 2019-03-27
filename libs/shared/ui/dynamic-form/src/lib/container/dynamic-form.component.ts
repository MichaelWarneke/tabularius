import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FormControlBase } from '../models';

@Component({
  selector: 'tabu-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() formModel: any;

  _data: any;
  @Input()
  set data(data: any) {
    this._data = data;
    this.updateData(data);
  }
  get data() {
    return this._data;
  }
  @Output() saveEntry = new EventEmitter<any>();
  @Output() deleteEntry = new EventEmitter<any>();

  form: any | null = new FormGroup({});
  formlist = new Array();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.formModel && this.formModel.model)
      this.form = this.fb.group(this.formModel.model);
    this.updateData(this.data);
  }

  onSave() {
    if (this.form) this.saveEntry.emit(this.form.value);
  }

  onReset() {
    if (this.form) this.form.reset();
  }

  onDelete() {
    if (this.form) this.deleteEntry.emit(this.form.value);
  }

  updateData(data: any) {
    if (data && this.form) {
      this.form.patchValue(this.data);
      this.formlist = new Array();
      Object.keys(this.form.controls).forEach(key => {
        if (this.form)
          this.formlist.push({
            ...(this.form.get(key) as FormControlBase),
            key: key
          });
      });
    }
  }
}
