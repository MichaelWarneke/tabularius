import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlTextbox } from '../../models';

@Component({
  selector: 'tabu-dynamic-form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  val: FormControlTextbox | null = null;
  group: FormGroup | null = null;
  
  constructor() {}

}
