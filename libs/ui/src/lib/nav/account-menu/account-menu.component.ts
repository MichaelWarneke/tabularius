import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tabu-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent implements OnInit {
  @Input() isAuth = false;
  constructor() {}

  ngOnInit() {}
}
