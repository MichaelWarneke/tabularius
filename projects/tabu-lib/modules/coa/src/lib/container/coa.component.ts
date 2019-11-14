import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'coa-container',
  templateUrl: './coa.component.html',
  styleUrls: ['./coa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
