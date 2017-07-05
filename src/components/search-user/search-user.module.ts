import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SearchUserComponent } from './search-user';

@NgModule({
  declarations: [
    SearchUserComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    SearchUserComponent
  ]
})
export class SearchUserComponentModule {}
