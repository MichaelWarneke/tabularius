import { NgModule, InjectionToken } from '@angular/core';
import { FirebaseAuthService } from './firebase-auth/firebase-auth.service';
import { IAuthService } from './api/auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
//import { firebaseKey } from './firebase/firebase-key';

const firebaseKey = {
  apiKey: 'AIzaSyBkGeb_GrowsEtprSGpZ00savv_Kh0r8bY',
  authDomain: 'tabularius-app.firebaseapp.com',
  databaseURL: 'https://tabularius-app.firebaseio.com',
  projectId: 'tabularius-app',
  storageBucket: 'tabularius-app.appspot.com',
  messagingSenderId: '20400501652'
};
@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseKey),
    AngularFireAuthModule
  ],
  providers: [{ provide: IAuthService, useExisting: FirebaseAuthService }]
})
export class DatabaseModule {}
