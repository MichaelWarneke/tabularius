import { async, TestBed } from '@angular/core/testing';
import { SharedWebCoreModule } from './shared-web-core.module';

describe('SharedWebCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedWebCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedWebCoreModule).toBeDefined();
  });
});
