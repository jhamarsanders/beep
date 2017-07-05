import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import {AngularFireAuthModule} from 'angularfire2/auth'
import { LoginFormComponent } from './login-form';

@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  imports: [
    IonicModule,
    AngularFireAuthModule
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginFormComponentModule {}
