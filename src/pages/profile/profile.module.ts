import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import {ProfileViewComponentModule} from '../../components/profile-view/profile-view.module';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    ProfileViewComponentModule
  ],
  exports: [
    ProfilePage
  ]
})
export class ProfilePageModule {}
