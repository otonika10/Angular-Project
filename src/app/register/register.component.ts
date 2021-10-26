
import { Component, OnInit } from '@angular/core';
import { RegService } from '../reg.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users$:any = this.reg.getAll()
  
  productId:number=4;
  
  form = new FormGroup(
    {
      email: new FormControl('',[Validators.required]),
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',Validators.required),
      confirm_password: new FormControl('',Validators.required),
    }
  )
  counter:number=0
  token:any=''
  bt(){
        if(this.form.valid){
          if(this.form.get('password')?.value==(this.form.get('confirm_password')?.value)){
            this.counter++
            this.token=`fa1hfiawfaf${(Math.random() * (1000 - 1) + 1)}`
            console.log(this.token)
            let data:any={reg_info:this.form.value,token:this.token}
            this.http.post(`${environment.api}/users`,data).subscribe()
            this.form.reset()
        
          }
        }
  }



  constructor(private reg:RegService,private http:HttpClient, private router:Router) {}

  ngOnInit(): void {
  }

}
