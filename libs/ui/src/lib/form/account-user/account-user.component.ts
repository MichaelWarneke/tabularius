import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '@tabularius/shared/models';
import { Validators, FormBuilder } from '@angular/forms';

export class UserModel {
  uid = [{ value: '', disabled: true }, Validators.required];
  email = ['', Validators.required];
  displayName = [''];
  photoURL = [''];
}

@Component({
  selector: 'tabu-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.scss']
})
export class AccountUserComponent implements OnInit {
  _user: IUser | null = null;
  @Output() save = new EventEmitter<IUser>();
  @Output() login = new EventEmitter<any>();
  @Output() logout = new EventEmitter<any>();
  @Input()
  set user(item: IUser | null) {
    this._user = item;
    if (item) {
      this.form.setValue({
        uid: item.uid,
        email: item.email,
        displayName: item.displayName ? item.displayName : '',
        photoURL: item.photoURL ? item.photoURL : ''
      });
    } else {
      this.form.reset();
    }
  }
  get user(): IUser | null {
    return this._user;
  }
  form = this.fb.group(new UserModel());

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  submit() {
    if (this._user) {
      this.save.emit({
        ...this.form.value,
        uid: this._user.uid
      } as IUser);
    }
  }

  onlogin() {
    this.login.emit({ email: 'Test', password: '123' });
  }
}
