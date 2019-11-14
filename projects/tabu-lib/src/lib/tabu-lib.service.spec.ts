import { TestBed } from '@angular/core/testing';

import { TabuLibService } from './tabu-lib.service';

describe('TabuLibService', () => {
  let service: TabuLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabuLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
