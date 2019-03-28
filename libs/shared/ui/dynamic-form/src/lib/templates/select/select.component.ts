import { Component } from '@angular/core';
import { FormControlSelect } from '../../models';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'tabu-dynamic-form-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends BaseComponent {
  control: FormControlSelect | null = null;
  constructor() {
    super();
  }
}
