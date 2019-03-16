import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TabuAppSidenavComponent } from './tabu-app-sidenav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedUiModule } from '@tabularius/shared/ui';

describe('NavComponent', () => {
  let component: TabuAppSidenavComponent;
  let fixture: ComponentFixture<TabuAppSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabuAppSidenavComponent],
      imports: [NoopAnimationsModule, RouterTestingModule, SharedUiModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabuAppSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
