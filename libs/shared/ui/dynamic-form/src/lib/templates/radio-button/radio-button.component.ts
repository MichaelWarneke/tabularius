import { Component } from '@angular/core';
import { FormControlRadioButton } from '../../models';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'tabu-dynamic-form-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent extends BaseComponent {
  control: FormControlRadioButton | null = null;
  constructor() {
    super();
  }
}
