import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ChatMessageComponent } from './chat-message';

@NgModule({
  declarations: [
    ChatMessageComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ChatMessageComponent
  ]
})
export class ChatMessageComponentModule {}
