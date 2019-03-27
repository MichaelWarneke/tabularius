import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'tabu-app-sidenav',
  templateUrl: './tabu-app-sidenav.component.html',
  styleUrls: ['./tabu-app-sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabuAppSidenavComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  @ViewChild('drawer') sidenav?: MatSidenav;
  @Input() userName: string | null | undefined;
  @Input() isAuth = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {}

  closeDrawer() {
    if (this.breakpointObserver.isMatched(Breakpoints.Handset)) {
      if (this.sidenav) {
        this.sidenav.close();
      }
    }
  }
}
