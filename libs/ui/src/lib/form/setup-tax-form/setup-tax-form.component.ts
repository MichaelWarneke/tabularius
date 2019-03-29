import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { ITax } from '@tabularius/shared/models';
import { FormSetup } from './setup-tax-form.model';

@Component({
  selector: 'tabu-setup-tax-form',
  templateUrl: './setup-tax-form.component.html',
  styleUrls: ['./setup-tax-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SetupTaxFormComponent implements OnInit {
  @Output() saveTax = new EventEmitter<ITax>();
  @Output() deleteTax = new EventEmitter<string>();
  @Input() tax: ITax | null = null;
  formModel = new FormSetup();

  constructor() {}

  ngOnInit() {}

  onCopy() {}

  onDelete() {}

  onSubmit(tax: ITax) {
    console.log('Submit clicked');
  }
}
