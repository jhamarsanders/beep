import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {AngularFireAuthModule} from 'angularfire2/auth'
import { RegisterPage } from './register';
import {RegisterFormComponentModule} from '../../components/register-form/register-form.module';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    RegisterFormComponentModule,
    AngularFireAuthModule
  ],
  exports: [
    RegisterPage
  ]
})
export class RegisterPageModule {}
