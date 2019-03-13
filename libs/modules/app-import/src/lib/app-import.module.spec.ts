import { async, TestBed } from '@angular/core/testing';
import { AppImportModule } from './app-import.module';

describe('AppImportModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppImportModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppImportModule).toBeDefined();
  });
});
