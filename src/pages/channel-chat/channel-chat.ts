import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Channel} from "../../models/channel/channel.interface";
import {ChatProvider} from "../../providers/chat/chat";
import {Message} from "../../models/messages/message";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";
import {ChannelMessage} from "../../models/channel/channel-message.interface";

/**
 * Generated class for the ChannelChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel: Channel;
  channelMessages: FirebaseListObservable<ChannelMessage[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chat: ChatProvider) {
  }

  ionViewWillLoad() {
    this.channel = this.navParams.get('channel');
    this.channelMessages = this.chat.getChannelChatReference(this.channel.$key);
  }

  sendMessage(content: string){
    let channelMessage: ChannelMessage = {
      content
    }

    this.chat.sendChannelChatMessage(this.channel.$key, channelMessage);
  }

}
