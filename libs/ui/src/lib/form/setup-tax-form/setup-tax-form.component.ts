import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { ITax } from '@tabularius/shared/models';
import { QuestionService } from './services/form-creator.service';

@Component({
  selector: 'tabu-setup-tax-form',
  templateUrl: './setup-tax-form.component.html',
  styleUrls: ['./setup-tax-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [QuestionService]
})
export class SetupTaxFormComponent implements OnInit {
  @Output() saveTax = new EventEmitter<ITax>();
  @Output() deleteTax = new EventEmitter<string>();
  @Input() tax: ITax | null = null;

  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {}

  onCopy() {}

  onDelete() {}

  onSubmit() {
    console.log('Submit clicked');
  }
}
