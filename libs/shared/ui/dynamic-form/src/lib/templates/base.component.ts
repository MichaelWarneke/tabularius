import { Component } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormControlBase } from '../models';

@Component({})
export class BaseComponent {
  control: FormControlBase | FormArray | null = null;
  group: FormGroup | null = null;
}
