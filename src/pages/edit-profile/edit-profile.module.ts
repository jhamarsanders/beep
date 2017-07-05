import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfilePage } from './edit-profile';
import {EditProfileFormComponentModule} from '../../components/edit-profile-form/edit-profile-form.module';

@NgModule({
  declarations: [
    EditProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(EditProfilePage),
    EditProfileFormComponentModule
  ],
  exports: [
    EditProfilePage
  ]
})
export class EditProfilePageModule {}
