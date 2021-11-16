import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { LoginGuard } from './guard/login.guard';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'home/login',
        component: LoginComponent,
        canActivate:[LoginGuard]
      },

    ])
  ],
  
  exports:[LoginComponent]
})
export class AuthModule { }
