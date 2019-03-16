import { async, TestBed } from '@angular/core/testing';
import { AppAccountModule } from './app-account.module';

describe('AppAccountModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppAccountModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppAccountModule).toBeDefined();
  });
});
