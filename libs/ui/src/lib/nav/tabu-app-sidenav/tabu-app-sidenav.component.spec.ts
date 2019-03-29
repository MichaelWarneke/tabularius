import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TabuAppSidenavComponent } from './tabu-app-sidenav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@tabularius/shared/ui';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NavComponent', () => {
  let component: TabuAppSidenavComponent;
  let fixture: ComponentFixture<TabuAppSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabuAppSidenavComponent],
      imports: [NoopAnimationsModule, RouterTestingModule, SharedModule],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
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

  it('should render', () => {
    expect(fixture).toMatchSnapshot();
  });
});
