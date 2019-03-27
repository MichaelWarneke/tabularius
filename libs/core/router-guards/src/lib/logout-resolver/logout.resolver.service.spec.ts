import { TestBed } from '@angular/core/testing';

import { Logout.ResolverService } from './logout.resolver.service';

describe('Logout.ResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Logout.ResolverService = TestBed.get(Logout.ResolverService);
    expect(service).toBeTruthy();
  });
});
