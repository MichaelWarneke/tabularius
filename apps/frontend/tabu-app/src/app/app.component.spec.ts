import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiAuthFacade } from '@tabularius/core/store';
import { Component, Input } from '@angular/core';
import { Subject, of, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({ selector: 'tabu-app-sidenav', template: '' })
class SidenavStubComponent {
  @Input() userName: string | null = null;
}

describe('AppComponent', () => {
  let appFixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;
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
      declarations: [AppComponent, SidenavStubComponent],
      providers: [
        {
          provide: ApiAuthFacade,
          useValue: {
            userName$
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    appFixture = TestBed.createComponent(AppComponent);
    appComponent = appFixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it(`should have as title 'Tabularius'`, () => {
    expect(appComponent.title).toEqual('Tabularius');
  });

  it('should create the side-nav', () => {
    fixtureSidenav = TestBed.createComponent(SidenavStubComponent);
    const sidenav = fixtureSidenav.debugElement.componentInstance;
    expect(sidenav).toBeTruthy();
  });

  it('should have userName as attribute', () => {
    appFixture.detectChanges();
    const text: HTMLElement = appFixture.debugElement.nativeElement
      .querySelector('tabu-app-sidenav')
      .getAttribute('ng-reflect-user-name');
    expect(text).toMatch(/testUserName/);
  });

  afterEach(() => {
    onDestroy.next();
  });
});
