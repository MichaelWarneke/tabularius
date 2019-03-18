import { NgModule, InjectionToken } from '@angular/core';
import { FirebaseAuthService } from './firebase-auth/firebase-auth.service';
import { IAuthService } from './api/auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { firebaseKey } from './firebase/firebase-key';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseKey),
    AngularFireAuthModule
  ],
  providers: [{ provide: IAuthService, useExisting: FirebaseAuthService }]
})
export class DatabaseModule {}
