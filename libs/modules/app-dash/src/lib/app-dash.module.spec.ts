import { async, TestBed } from '@angular/core/testing';
import { AppDashModule } from './app-dash.module';

describe('AppDashModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppDashModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppDashModule).toBeDefined();
  });
});
