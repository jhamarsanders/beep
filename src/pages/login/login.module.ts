import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {AngularFireAuthModule} from 'angularfire2/auth'
import { LoginPage } from './login';
import {LoginFormComponentModule} from '../../components/login-form/login-form.module';


@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    LoginFormComponentModule,
    AngularFireAuthModule
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule {}
