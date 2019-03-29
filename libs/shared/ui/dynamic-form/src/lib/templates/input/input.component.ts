import { Component } from '@angular/core';
import { FormControlTextbox } from '../../models';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'tabu-dynamic-form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends BaseComponent {
  control: FormControlTextbox | null = null;
  hide = true;
  constructor() {
    super();
  }
}
