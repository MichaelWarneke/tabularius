import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '@tabularius/shared/models';
import { Validators, FormBuilder } from '@angular/forms';

export class UserModel {
  uid = [{ value: '' }, Validators.required];
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
  @Output() save = new EventEmitter<IUser>();
  @Output() login = new EventEmitter<any>();
  @Output() logout = new EventEmitter<any>();
  @Input()
  set user(item: IUser) {
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
  form = this.fb.group(new UserModel());

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  submit() {
    this.save.emit({
      ...this.form.value
    } as IUser);
  }
}
