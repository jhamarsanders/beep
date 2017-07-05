import {Component, OnInit} from '@angular/core';
import {DataProvider} from "../../providers/data/data";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";
import {Profile} from "../../models/profile/profile";
import {NavController} from "ionic-angular";

/**
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-online-users',
  templateUrl: 'online-users.html'
})
export class OnlineUsersComponent implements OnInit{

  text: string;

  userList: FirebaseListObservable<Profile[]>;

  constructor(private data: DataProvider, private navCtrl: NavController) {

  }

  ngOnInit() {
    this.setUserOnline();
    this.getOnlineUsers();
  }

  setUserOnline(){
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.data.setUserOnline(profile);
    })
  }

  getOnlineUsers(){
    this.userList = this.data.getOnlineUsers();
  }

  openChat(profile: Profile){
    this.navCtrl.push('MessagePage', {profile})
  }

}
