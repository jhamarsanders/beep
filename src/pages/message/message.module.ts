import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagePage } from './message';
import {SendMessageBoxComponentModule} from '../../components/send-message-box/send-message-box.module';
import {ChatMessageComponentModule} from "../../components/chat-message/chat-message.module";

@NgModule({
  declarations: [
    MessagePage,
  ],
  imports: [
    IonicPageModule.forChild(MessagePage),
    SendMessageBoxComponentModule,
    ChatMessageComponentModule
  ],
  exports: [
    MessagePage
  ]
})
export class MessagePageModule {}
