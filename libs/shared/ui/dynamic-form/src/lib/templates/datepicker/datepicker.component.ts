import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlTextbox } from '../../models';

@Component({
  selector: 'tabu-dynamic-form-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  val: FormControlTextbox | null = null;
  group: FormGroup | null = null;
  
  constructor() {}
}
