import { async, TestBed } from '@angular/core/testing';
import { CoreStoreModule } from './core-store.module';

describe('CoreStoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreStoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreStoreModule).toBeDefined();
  });
});
