import { Component } from '@angular/core';
import { FormControlCheckbox } from '../../models';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'tabu-dynamic-form-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends BaseComponent {
  control: FormControlCheckbox | null = null;

  constructor() {
    super();
  }
}
