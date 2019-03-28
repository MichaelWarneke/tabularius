import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormControlBase, FormControlArray } from '../../models';

@Component({
  selector: 'tabu-dynamic-form-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {
  control: FormControlArray | null = null;
  group: FormGroup | null = null;

  //TODO
  key = 'entries';
  constructor() {}

  ngOnInit() {
    console.log('array control :', this.control);
    console.log('array nested form :', this.getNestedForm());
  }

  getNestedForm(): FormArray | null {
    if (this.group) {
      return this.group.get('entries') as FormArray;
    }
    return null;
  }
}
