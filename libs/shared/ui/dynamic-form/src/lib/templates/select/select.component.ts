import { Component, OnInit } from '@angular/core';
import { FormControlSelect } from '../../models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tabu-dynamic-form-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  val: FormControlSelect | null = null;
  group: FormGroup | null = null;

  constructor() {}
}
