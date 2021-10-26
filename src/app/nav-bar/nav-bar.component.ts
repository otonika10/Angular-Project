import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegService } from '../reg.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private reg:RegService,private http:HttpClient, private router:Router) {}
  logout(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('/').then()
  }
  ngOnInit(): void {
  }

}
