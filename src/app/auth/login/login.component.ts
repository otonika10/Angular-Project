import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('',Validators.email)
  password = new FormControl('')

  constructor(private authe: AuthService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authe.auth(this.email.value, this.password.value)
  }
}
