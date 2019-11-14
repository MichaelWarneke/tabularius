import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'journal-container',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JournalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
