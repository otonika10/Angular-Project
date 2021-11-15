import { Component, OnInit } from '@angular/core';
import { RegService } from '../reg.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

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
