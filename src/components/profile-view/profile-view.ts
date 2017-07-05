import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthProvider} from "../../providers/auth/auth";
import {DataProvider} from "../../providers/data/data";
import {Profile} from "../../models/profile/profile";
import {User} from 'firebase/app';
import {LoadingController, Loading} from "ionic-angular";

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent implements OnInit{

  text: string;
  private authUser: User;
  public userProfile: Profile;
  private loader: Loading;

  @Output() existingProfile: EventEmitter<Profile>;

  ngOnInit(): void{
    this.loader.present();
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.userProfile = profile;
      this.existingProfile.emit(this.userProfile);
      this.loader.dismiss();
    });
    // this.auth.getAuthenticatedUser().subscribe(auth => {
    //   console.log(auth);
    //   this.authUser = auth;
    //   this.data.getProfile(this.authUser).subscribe(profile =>{
    //     this.userProfile = <Profile>profile.val();
    //     console.log(this.userProfile);
    //     this.existingProfile.emit(this.userProfile);
    //     this.loader.dismiss();
    //   })
    // })
  }

  constructor(private loading: LoadingController, private auth: AuthProvider, private data: DataProvider) {
    console.log('Hello ProfileViewComponent Component');
    this.text = 'Hello World';
    this.loader = this.loading.create({
      content: 'Loading Profile'
    });

    this.existingProfile = new EventEmitter<Profile>();
  }

}
