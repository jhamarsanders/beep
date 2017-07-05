import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchUserPage } from './search-user';
import {SearchUserComponentModule} from '../../components/search-user/search-user.module';

@NgModule({
  declarations: [
    SearchUserPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchUserPage),
    SearchUserComponentModule
  ],
  exports: [
    SearchUserPage
  ]
})
export class SearchUserPageModule {}
