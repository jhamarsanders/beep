import {Component, OnDestroy, Output, EventEmitter, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {User} from 'firebase/app';
import {Profile} from '../../models/profile/profile';
import {AuthProvider} from '../../providers/auth/auth';
import {DataProvider} from '../../providers/data/data';

/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy {

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  @Output() saveProfileResult: EventEmitter<Boolean>;
  @Input() profile: Profile;

  constructor(private data: DataProvider, private auth: AuthProvider) {
    this.saveProfileResult = new EventEmitter<Boolean>();

    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    })
  }

  ngOnInit(): void{
    if(!this.profile){
      this.profile = {} as Profile;
    }
    console.log(this.profile);
  }

  async saveProfile(){
    if(this.authenticatedUser){
      this.profile.email = this.authenticatedUser.email;
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
      this.saveProfileResult.emit(result);
      console.log(result);
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }

}
