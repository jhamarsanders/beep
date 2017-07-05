import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from 'angularfire2/database'
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";
import {Channel} from "../../models/channel/channel.interface";
import {ChannelMessage} from "../../models/channel/channel-message.interface";

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ChatProvider {

  constructor(private database: AngularFireDatabase) {
  }

  addChannel(channelName: string){
    this.database.list(`channel-names`).push({name: channelName});
  }

  getChannelListRef(): FirebaseListObservable<Channel>{
    return this.database.list(`channel-names`);
  }

  getChannelChatReference(channelKey: string){
    return this.database.list(`channels/${channelKey}`)
  }

  async sendChannelChatMessage(channelKey: string, message: ChannelMessage){
    await this.database.list(`channels/${channelKey}`).push(message);
  }

}
