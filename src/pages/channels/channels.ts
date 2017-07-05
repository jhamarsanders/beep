import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {ChatProvider} from "../../providers/chat/chat";
import {Observable} from "rxjs/Observable";
import {Channel} from "../../models/channel/channel.interface";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";

/**
 * Generated class for the ChannelsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channelList: FirebaseListObservable<Channel[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private chat: ChatProvider) {
  }

  ionViewWillLoad(){
    this.getChannels();
  }

  selectChannel(channel: Channel){
    this.navCtrl.push('ChannelChatPage', {channel})
  }

  showAddChannelDialog(){
    this.alertCtrl.create({
      title: 'Channel Name',
      inputs: [{
        name: 'channelName'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.chat.addChannel(data.channelName)
          }
        }
      ]
    }).present();
  }

  getChannels(){
    this.channelList = this.chat.getChannelListRef()
  }

}
