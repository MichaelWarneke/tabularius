import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { IUser } from '@tabularius/shared/models';
import { FormSetup } from './account-user.model';

@Component({
  selector: 'tabu-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})
export class AccountUserComponent implements OnInit {
  _user: IUser | null = null;
  formModel = new FormSetup();
  @Output() save = new EventEmitter<IUser>();

  @Input()
  set user(user: IUser | null) {
    this._user = user;
  }

  get user() {
    return this._user;
  }

  constructor() {}

  ngOnInit() {}

  onSave(data: any) {
    console.warn('onSave :', data);
    if (data) {
      this.save.emit({
        ...data
      } as IUser);
    }
  }


}
