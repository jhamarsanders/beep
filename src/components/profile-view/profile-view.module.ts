import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProfileViewComponent } from './profile-view';

@NgModule({
  declarations: [
    ProfileViewComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ProfileViewComponent
  ]
})
export class ProfileViewComponentModule {}
