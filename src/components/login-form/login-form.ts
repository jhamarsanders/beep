import { Component, EventEmitter, Output } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {Account} from '../../models/account/account.interface';
import {LoginResponse} from '../../models/login/login-response.interface';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  text: string;
  account = {} as Account;

  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private auth: AuthProvider, private navCtrl: NavController, private navParams: NavParams) {
    console.log('Hello LoginFormComponent Component');
    this.text = 'Hello World';
    this.loginStatus = new EventEmitter<LoginResponse>()
  }

  async login(){
    const result = await this.auth.signIn(this.account);
    this.loginStatus.emit(result);
  }

  navigateToRegisterPage(){
    this.navCtrl.push('RegisterPage')
  }

  navigateToPage(pageName: string){
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
