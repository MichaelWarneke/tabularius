import { Component } from '@angular/core';
import { FormControlCheckbox } from '../../models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tabu-dynamic-form-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  val: FormControlCheckbox | null = null;
  group: FormGroup | null = null;

  constructor() {}
}
