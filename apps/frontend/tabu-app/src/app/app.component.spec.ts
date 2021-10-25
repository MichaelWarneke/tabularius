import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

// tslint:disable-next-line:component-selector
@Component({ selector: 'app-shell-container', template: '' })
class AppShellStubComponent {}

describe('AppComponent', () => {
  let appFixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent, AppShellStubComponent]
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
});
