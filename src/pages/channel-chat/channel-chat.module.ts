import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChannelChatPage } from './channel-chat';
import {SendMessageBoxComponentModule} from "../../components/send-message-box/send-message-box.module";

@NgModule({
  declarations: [
    ChannelChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ChannelChatPage),
    SendMessageBoxComponentModule
  ],
  exports: [
    ChannelChatPage
  ]
})
export class ChannelChatPageModule {}
