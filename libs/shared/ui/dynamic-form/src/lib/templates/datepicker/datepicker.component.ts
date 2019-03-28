import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlTextbox } from '../../models';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'tabu-dynamic-form-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent extends BaseComponent {
  control: FormControlTextbox | null = null;
  group: FormGroup | null = null;

  constructor() {
    super();
  }
}
