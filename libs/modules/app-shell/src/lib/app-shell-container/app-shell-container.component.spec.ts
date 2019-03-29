import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiAuthFacade } from '@tabularius/core/store';
import { AppShellContainerComponent } from './app-shell-container.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { of, Subject, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// tslint:disable-next-line:component-selector
@Component({ selector: 'tabu-app-sidenav', template: '' })
class SidenavStubComponent {
  @Input() userName: string | null = null;
}

describe('AppShellContainerComponent', () => {
  let component: AppShellContainerComponent;
  let fixtureApp: ComponentFixture<AppShellContainerComponent>;
  let fixtureSidenav: ComponentFixture<SidenavStubComponent>;

  const onDestroy = new Subject<void>();
  const userName$ = new ReplaySubject<string>();
  const testUserName = 'testUserName';

  beforeEach(async(() => {
    // Subscribe to Observable
    of(testUserName)
      .pipe(takeUntil(onDestroy))
      .subscribe(userName$);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppShellContainerComponent, SidenavStubComponent],
      providers: [
        {
          provide: ApiAuthFacade,
          useValue: {
            userName$
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixtureApp = TestBed.createComponent(AppShellContainerComponent);
    component = fixtureApp.componentInstance;
    fixtureApp.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the side-nav', () => {
    fixtureSidenav = TestBed.createComponent(SidenavStubComponent);
    const sidenav = fixtureSidenav.debugElement.componentInstance;
    expect(sidenav).toBeTruthy();
  });

  it('should have userName as attribute', () => {
    const text: HTMLElement = fixtureApp.debugElement.nativeElement
      .querySelector('tabu-app-sidenav')
      .getAttribute('ng-reflect-user-name');
    expect(text).toMatch(/testUserName/);
  });

  afterEach(() => {
    onDestroy.next();
  });
});
