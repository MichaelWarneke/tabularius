import { TestBed } from '@angular/core/testing';

import { FirebaseAuthService } from './firebase-auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

describe('FirebaseAuthService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AngularFireAuth]
    })
  );

  it('should be created', () => {
    const service: FirebaseAuthService = TestBed.get(FirebaseAuthService);
    expect(service).toBeTruthy();
  });
});
