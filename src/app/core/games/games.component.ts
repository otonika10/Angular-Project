import { Component, OnInit } from '@angular/core';
import { RegService } from '../../reg.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor(private reg:RegService) { }
  arr:any[]=[]
  ngOnInit(): void {
    this.reg.getdatagames().subscribe((res:any)=>{console.log(res);
      this.arr = res.data;
      });
  }
  show(){
  }
}
