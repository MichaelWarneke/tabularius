import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tabu-dynamic-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent {
  @Input() text: string | null = null;
  @Input() group: FormGroup | null = null;
  @Input() color: string | null = null;
  @Output() buttonClicked = new EventEmitter<any>();

  constructor() {}
}
