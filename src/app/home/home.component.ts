
import { Component, OnInit } from '@angular/core';
import { RegService } from '../reg.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { pipe } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private reg:RegService) { }
  players:any[]=[]
  ngOnInit(): void {
    this.reg.getdataplayers().subscribe((res:any)=>{console.log(res);
      this.players = res.data;
      });
  }
  show(){
  }
}
