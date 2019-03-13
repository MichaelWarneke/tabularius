import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ITax } from '@tabularius/shared/models';

export class TaxModel implements ITax {
  id = ['', Validators.required];
  taxCode = ['', Validators.required];
  taxDescription = ['', Validators.required];
  taxPercentageRate = [null, Validators.required];
  basGrossAmount = [''];
  basTaxAmount = [''];
  paymentSummaryType = [''];
  grossAmountPayment = [''];
  taxAmountPayment = [''];
}

@Component({
  selector: 'tabu-setup-tax-form',
  templateUrl: './setup-tax-form.component.html',
  styleUrls: ['./setup-tax-form.component.scss']
})
export class SetupTaxFormComponent implements OnInit {
  @Output() saveTax = new EventEmitter<ITax>();
  @Output() deleteTax = new EventEmitter<string>();
  @Input()
  set account(tax: ITax) {
    if (tax) {
      this.taxForm.setValue(tax);
    }
  }

  taxForm = this.fb.group(new TaxModel());

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  onNew() {
    this.taxForm.reset();
  }

  onDelete() {
    const id = this.taxForm.get('id');
    if (id) {
      this.deleteTax.emit(id.value as string);
    }
  }

  onSubmit() {
    console.log('Submit clicked');
    this.saveTax.emit(this.taxForm.value as ITax);
  }
}
