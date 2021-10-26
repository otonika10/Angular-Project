import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }
  auth(email:string,password:string){
    this.http.get<User[]>(`${environment.api}/users`)
    .pipe(
      tap((users:User[])=>{
        const user = users.filter(u => u.reg_info.email == email && u.reg_info.password == password)[0];
        if (user) {
          localStorage.setItem('token', user.token)
          this.router.navigate(['home'])
        } else {
          alert('invalid username or password')
        }
      })
    ).subscribe()
  }
}

export interface User {
  reg_info:{
    email: string;
    password: string;
  }
  token: string;
  isAdmin: boolean
}