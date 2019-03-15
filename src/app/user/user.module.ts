import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from '../user/signup/signup.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    UserRoutingModule
  ]
})

export class UserModule { }
