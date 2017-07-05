import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RegisterFormComponent } from './register-form';

@NgModule({
  declarations: [
    RegisterFormComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    RegisterFormComponent
  ]
})
export class RegisterFormComponentModule {}
