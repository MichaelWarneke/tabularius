import { Component } from '@angular/core';
import { QuestionService } from '../services/form-creator.service';

@Component({
  selector: 'app-journal-app-journal-container',
  templateUrl: './app-journal-container.component.html',
  styleUrls: ['./app-journal-container.component.scss'],
  providers: [QuestionService]
})
export class AppJournalContainerComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
