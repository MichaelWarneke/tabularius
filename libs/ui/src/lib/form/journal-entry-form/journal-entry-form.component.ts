import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { IJournal } from '@tabularius/shared/models';
import { QuestionService } from './services/form-creator.service';

@Component({
  selector: 'tabu-journal-entry-form',
  templateUrl: './journal-entry-form.component.html',
  styleUrls: ['./journal-entry-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [QuestionService]
})
export class JournalEntryFormComponent implements OnInit {
  questions: any[];
  @Input() journal: IJournal | null = null;

  @Output() save = new EventEmitter<IJournal>();
  @Output() delete = new EventEmitter<IJournal>();
  @Output() copy = new EventEmitter<IJournal>();

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
  ngOnInit() {}

  onSubmit() {}

  onDelete() {}

  onCopy() {}
}
