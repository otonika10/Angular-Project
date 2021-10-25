
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
  employees$:any = this.reg.getAll()
  
  productId:number=4;
  
  form = new FormGroup(
    {
      employee_name: new FormControl('',Validators.required),
      employee_salary: new FormControl('',Validators.required),
      employee_age: new FormControl('',Validators.required),
    }
  )
  bt(){
        if(this.form.valid){ 
        let data:any[]=this.form.value
        this.http.post(`${environment.api}/employees`,data).subscribe()
        this.form.reset()
      }
  }



  constructor(private reg:RegService,private http:HttpClient, private router:Router) {}
  logout(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('/').then()
  }
  ngOnInit(): void {
  }

}
