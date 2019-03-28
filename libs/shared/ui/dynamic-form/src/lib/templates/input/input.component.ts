import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlTextbox } from '../../models';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'tabu-dynamic-form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends BaseComponent {
  constructor() {
    super();
  }
}
