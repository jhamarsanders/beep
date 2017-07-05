import {Component, EventEmitter, Output} from '@angular/core';
import {DataProvider} from "../../providers/data/data";
import {Profile} from "../../models/profile/profile";

/**
 * Generated class for the SearchUserComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-search-user',
  templateUrl: 'search-user.html'
})
export class SearchUserComponent {

  text: string;
  query: string;
  profileList: Profile[];

  @Output() selectedProfile: EventEmitter<Profile>;

  constructor(private data: DataProvider) {

    this.selectedProfile = new EventEmitter<Profile>()
  }

  selectProfile(profile: Profile){
    this.selectedProfile.emit(profile);
  }

  searchUser(query: string){
    this.data.searchUser(query).subscribe(profiles => {
      this.profileList = profiles;
    })
  }

}
