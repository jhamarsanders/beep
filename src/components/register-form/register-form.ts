import { Component, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {Account} from '../../models/account/account.interface';
import {AuthProvider} from '../../providers/auth/auth';
import {LoginResponse} from '../../models/login/login-response.interface';

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  text: string;

  account = {} as Account;

  @Output() registerStatus: EventEmitter<LoginResponse>;

  constructor(private toast: ToastController, private auth: AuthProvider) {
    console.log('Hello RegisterFormComponent Component');
    this.text = 'Hello World';
    this.registerStatus = new EventEmitter<LoginResponse>()
  }

  async register(){
    try{
      const result = await this.auth.createUser(this.account);
      this.registerStatus.emit(result);
    }
    catch (e){
      console.error(e);
      this.registerStatus.emit(e);
    }
  }

}
