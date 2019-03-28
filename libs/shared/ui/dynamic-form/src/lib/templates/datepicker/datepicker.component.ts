import { Component } from '@angular/core';
import { FormControlDate } from '../../models';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'tabu-dynamic-form-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent extends BaseComponent {
  control: FormControlDate | null = null;

  constructor() {
    super();
  }
}
