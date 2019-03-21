import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'tabu-app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnInit {
  progressMode = 'determinate';
  @Input() progressValue = 0;
  @Input() set showProgress(val: boolean){
    if(val){
      this.progressMode = 'query'
    } else{
        this.progressMode = 'determinate'
    } 
  };
  constructor() { }

  ngOnInit() {
  }

}
