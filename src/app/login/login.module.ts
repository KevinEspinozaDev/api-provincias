import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/shared/material/material.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    MaterialModule,
  ]
})
export class LoginModule { }
