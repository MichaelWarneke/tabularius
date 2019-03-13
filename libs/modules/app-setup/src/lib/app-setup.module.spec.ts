import { async, TestBed } from '@angular/core/testing';
import { AppSetupModule } from './app-setup.module';

describe('AppSetupModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppSetupModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppSetupModule).toBeDefined();
  });
});
