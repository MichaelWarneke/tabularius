import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlRadioButton } from '../../models';

@Component({
  selector: 'tabu-dynamic-form-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {
  control: FormControlRadioButton | null = null;
  group: FormGroup | null = null;

  constructor() {}
}
