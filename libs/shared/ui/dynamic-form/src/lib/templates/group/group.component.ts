import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlBase } from '../../models';

@Component({
  selector: 'tabu-dynamic-form-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input() form: FormGroup = new FormGroup({});
  formlist = new Array<FormControlBase>();

  constructor() {}

  ngOnInit() {
    this.createList();
  }

  createList() {
    this.formlist = new Array();
    Object.keys(this.form.controls).forEach(key => {
      if (this.form) {
        const control = this.form.get(key) as FormControlBase;
        control.key = key;
        this.formlist.push(control);
      }
    });
  }
}
