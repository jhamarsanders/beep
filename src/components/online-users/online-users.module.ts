import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { OnlineUsersComponent } from './online-users';

@NgModule({
  declarations: [
    OnlineUsersComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    OnlineUsersComponent
  ]
})
export class OnlineUsersComponentModule {}
