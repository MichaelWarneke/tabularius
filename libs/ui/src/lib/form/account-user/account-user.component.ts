import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { IUser } from '@tabularius/shared/models';
import { QuestionService } from './services/form-creator.service';

@Component({
  selector: 'tabu-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [QuestionService]
})
export class AccountUserComponent implements OnInit {
  _user: IUser | null = null;
  questions: any[];
  @Output() save = new EventEmitter<IUser>();
  @Output() login = new EventEmitter<any>();
  @Output() logout = new EventEmitter<any>();
  @Input()
  set user(user: IUser | null) {
    this._user = user;
  }

  get user() {
    return this._user;
  }

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {}

  submit() {
    /*    if (this._user) {
      this.save.emit({
        ...this.form.value,
        uid: this._user.uid
      } as IUser);
    }*/
  }

  onlogin() {
    this.login.emit({ email: 'Test', password: '123' });
  }
}
