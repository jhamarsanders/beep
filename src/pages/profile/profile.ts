import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Profile} from "../../models/profile/profile";
import {AuthProvider} from "../../providers/auth/auth";

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  existingProfile = {} as Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
  }

  signOut(){
    this.auth.signOut();
    this.navCtrl.setRoot('LoginPage');
  }

  getExistingProfile(profile: Profile){
    this.existingProfile = profile;
    console.log(profile);
  }

  navigateToEditProfilePage(){
    this.navCtrl.push('EditProfilePage', {existingProfile: this.existingProfile});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
