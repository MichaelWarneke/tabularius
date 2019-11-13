import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormControlArray } from '../../models';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'tabu-dynamic-form-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent extends BaseComponent {
  control: FormControlArray | null = null;

  //TODO
  key = 'entries';
  constructor() {
    super();
  }

  getNestedForm(): FormArray | null {
    if (this.group) {
      return this.group.get('entries') as FormArray;
    }
    return null;
  }
}
