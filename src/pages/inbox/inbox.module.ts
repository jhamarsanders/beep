import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxPage } from './inbox';
import {OnlineUsersComponentModule} from "../../components/online-users/online-users.module";

@NgModule({
  declarations: [
    InboxPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxPage),
    OnlineUsersComponentModule
  ],
  exports: [
    InboxPage
  ]
})
export class InboxPageModule {}
