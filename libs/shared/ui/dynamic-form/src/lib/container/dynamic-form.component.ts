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
  @Output() copyEntry = new EventEmitter<any>();

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log('Before :', this.formModel.model);
    this.form = this.convertModel(this.formModel.model);
    //this.form = new FormGroup(this.formModel.model);
    console.log('After');
    /*    if (this.formModel && this.formModel.model) {
      this.form = this.fb.group(this.formModel.model);
      if (this.formModel.entryModel) {
        this.form.entries = this.fb.array([]);
      }
    }
*/ this.updateData(
      this.data
    );
  }

  convertModel(model: any): FormGroup {
    const form: FormGroup = new FormGroup({});
    console.log('model :', model);
    Object.keys(model).forEach(key => {
      const control = model[key];
      if (control instanceof FormControlBase) {
        form.addControl(key, control);
      } else if (control instanceof Array) {
        for (const group of control) {
          const formGroup: FormGroup = this.convertModel(group);
          const formArray: FormArray = new FormArray([]);
          formArray.push(formGroup);
          form.addControl(key, formArray);
        }
        console.log(key, ' IT IS Array :', control);
      } else {
        console.log(key, ' IT IS NOT :', control);
      }
      control.key = key;
    });
    return form;
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

  onCopy() {
    if (this.form) this.deleteEntry.emit(this.form.value);
  }

  updateData(data: any) {
    if (this.form) {
      if (this.data) this.form.patchValue(this.data);
    }
  }
}
