import { Component, OnInit } from '@angular/core';
import { RegService } from '../reg.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor(private reg:RegService) { }
  players:any[]=[]
  ngOnInit(): void {
    this.reg.getdata().subscribe((res:any)=>{console.log(res);
      this.players = res.data;
      });
  }
  show(){
  }
}
