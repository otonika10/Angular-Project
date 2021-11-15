import { Component, OnInit } from '@angular/core';
import { RegService } from '../reg.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor(private reg:RegService) { }
  players:any[]=[]
  ngOnInit(): void {
    this.reg.getdatagames().subscribe((res:any)=>{console.log(res);
      this.players = res.data;
      });
  }
  show(){
  }
}
