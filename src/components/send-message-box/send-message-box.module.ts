import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SendMessageBoxComponent } from './send-message-box';

@NgModule({
  declarations: [
    SendMessageBoxComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    SendMessageBoxComponent
  ]
})
export class SendMessageBoxComponentModule {}
